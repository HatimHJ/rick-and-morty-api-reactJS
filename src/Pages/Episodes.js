import React, { useEffect, useState } from "react";
import Cards from "../components/Cards/Cards";
import InputGroup from "../components/Filters/InputGroup";

const Episodes = () => {
  const [id, setId] = useState(1);
  const [info, setInfo] = useState([]);
  const { air_date, name } = info;
  const [results, setResults] = useState([]);
  const api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      // get all episode  data
      const res = await fetch(api);
      const data = await res.json();

      setInfo(data);
      // get all charaters in single episode
      const characterLinks = await Promise.all(
        data.characters.map(async (character) => {
          const char = await fetch(character);
          const charData = await char.json();
          return charData;
        })
      );
      setResults(characterLinks);
      // get all episodes
    })();
  }, [api]);

  return (
    <>
      {/* header */}
      <div className="container text-center ">
        <div className="row mb-4">
          <h3 className="text-light ">
            <span className="bg-secondary  p-2">Air Date</span>
            <span className="bg-secondary bg-opacity-75 rounded-end p-2">
              {air_date}
            </span>
          </h3>
        </div>
        <div className="row mb-4 ">
          <h3 className="text-light ">
            <span className="bg-primary  p-2">Name</span>
            <span className="bg-primary bg-opacity-75 rounded-end p-2">
              {name !== "" ? name : "unknown"}
            </span>
          </h3>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {/* filter */}
          <div className="col-md-3">
            <h3>Pick Episode</h3>
            <InputGroup setId={setId} name="episodes" />
          </div>
          {/* cards */}
          <div className="col-md-9">
            <div className="row">
              {results ? (
                <Cards page="/episode" results={results} />
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

export default Episodes;
