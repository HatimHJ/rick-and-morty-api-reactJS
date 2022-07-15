import React, { useEffect, useState } from "react";

const InputGroup = ({ setId, name }) => {
  const [page, setPage] = useState(1);
  const [episodes, setEpisodes] = useState([]);
  const api = `${
    name === "episodes"
      ? `https://rickandmortyapi.com/api/episode?page=${page}`
      : `https://rickandmortyapi.com/api/location?page=${page}`
  } `;
  useEffect(() => {
    (async function () {
      // get all episode  data
      const res = await fetch(api);
      const data = await res.json();
      const {
        info: { pages },
        results,
      } = data;

      results.forEach((ele) => {
        console.log(ele);
        setEpisodes((prev) => [...prev, ele.name]);
      });

      // get all episodes
      if (page < pages) {
        setPage((prev) => prev + 1);
      }
    })();
  }, [api]);

  const x = (e) => {
    console.log(e.target.value);
    setId(e.target.value);
  };
  return (
    <select className="form-select" aria-label="Piolet" onChange={(e) => x(e)}>
      {episodes &&
        episodes.map((item, index) => {
          return (
            <option value={index + 1} key={index}>
              {item}
            </option>
          );
        })}
    </select>
  );
};

export default InputGroup;
