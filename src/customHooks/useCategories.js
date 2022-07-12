import { useEffect, useState } from "react";

let x = 0;
let status = [];
let species = [];
let gender = [];
function useCategories() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  let url = `https://rickandmortyapi.com/api/character?page=${page}`;

  useEffect(() => {
    fetch(url)
      .then((res) => {
        const json = res.json();
        return json;
      })
      .then((data) => {
        const total = data.info.pages;

        data.results.forEach((result) => {
          if (!species.includes(result.species)) {
            species.push(result.species);
          }
          if (!gender.includes(result.gender)) {
            gender.push(result.gender);
          }
          if (!status.includes(result.status)) {
            status.push(result.status);
          }
          x++;
        });
        if (page < total) {
          setPage((prev) => prev + 1);
        }
      });
  }, [url]);

  return { status, species, gender };
}

export default useCategories;
