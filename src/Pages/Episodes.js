import React, { useEffect, useState } from "react";
import Cards from "../components/Cards/Cards";

const Episodes = () => {
  const [id, setId] = useState(1);
  const [info, setInfo] = useState([]);
  const { air_date, name } = info;
  const api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      const res = await fetch(api);
      const data = await res.json();
      console.log(data);
      setInfo(data);
    })();
  }, [api]);

  return (
    <>
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
              {name}
            </span>
          </h3>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h3>Episodes</h3>
            {/* <form action="">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option value="0">defualt</option>
                {results &&
                  results.map((item, key) => (
                    <option key={key} value={item.name}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </form> */}
          </div>
          <div className="col-md-9">
            {/* <div className="row">
              {results ? (
                <Cards results={results} />
              ) : data.error ? (
                <h2>{data.error}</h2>
              ) : (
                <h2>Loading...</h2>
              )}
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Episodes;
