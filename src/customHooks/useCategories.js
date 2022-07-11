import { useEffect, useState } from "react";

let x = 0;
let status = [];
function useCategories() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  let url = `https://rickandmortyapi.com/api/character?page=${page}`;

  useEffect(() => {
    console.log(x);
    fetch(url)
      .then((res) => {
        const json = res.json();
        return json;
      })
      .then((data) => {
        const total = data.info.pages;

        data.results.forEach((result) => {
          console.log(result.status);

          if (!status.includes(result.status)) {
            status.push(result.status);
          }
          x++;
        });
        // if (page < total) {
        //   setPage((prev) => prev + 1);
        // }
      });
  }, [url]);

  return { status };
}

export default useCategories;
