import React, { useEffect, useState } from "react";
import Cards from "../components/Cards/Cards";
import InputGroup from "../components/Filters/InputGroup";

const Location = () => {
  const [id, setId] = useState(1);
  const [info, setInfo] = useState([]);
  const [results, setResults] = useState([]);
  const { type, name, dimension } = info;
  const api = `https://rickandmortyapi.com/api/location/${id}`;
  console.log(results);

  useEffect(() => {
    (async function () {
      // get all episode  data
      const res = await fetch(api);
      const data = await res.json();
      console.log(data);
      setInfo(data);
      // get all charaters in single episode
      const locationLinks = await Promise.all(
        data.residents.map(async (resident) => {
          const char = await fetch(resident);
          const charData = await char.json();
          return charData;
        })
      );
      // get all episodes
      setResults(locationLinks);
    })();
  }, [api]);

  return (
    <>
      {/* header */}
      <div className="container text-center ">
        <div className="row mb-4">
          <h3 className="text-light ">
            <span className="bg-secondary  p-2">name</span>
            <span className="bg-secondary bg-opacity-75 rounded-end p-2">
              {name}
            </span>
          </h3>
        </div>
        <div className="row mb-4 ">
          <h4 className="text-light ">
            <span className="bg-primary  p-2">dimension</span>
            <span className="bg-primary bg-opacity-75 rounded-end p-2">
              {dimension ? dimension : "unknown"}
            </span>
          </h4>
        </div>
        <div className="row mb-4 ">
          <h5 className="text-light ">
            <span className="bg-primary  p-2">type</span>
            <span className="bg-primary bg-opacity-75 rounded-end p-2">
              {type ? type : "unknown"}
            </span>
          </h5>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {/* filter */}
          <div className="col-md-3">
            <h3>Pick Location</h3>
            <InputGroup setId={setId} name="location" />
          </div>
          {/* cards */}
          <div className="col-md-9">
            <div className="row">
              {results ? (
                <Cards page="/location" results={results} />
              ) : info.error ? (
                <h2>{info.error}</h2>
              ) : (
                <h2>Loading...</h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
