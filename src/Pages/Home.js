import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { useEffect, useState } from "react";
import Cards from "../components/Cards/Cards";
import Filters from "../components/Filters/Filters";
import Paginate from "../components/Pagination/Paginate";
import Search from "../components/Search/Search";
import { useGlobalContext } from "../context";

function Home() {
  const [search, setSearch] = useState("");
  const { filter, pageNumber, setPageNumber } = useGlobalContext();
  const [data, setData] = useState([]);
  const { info, results } = data;
  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&${
    filter.status ? `status=${filter.status}` : ""
  }&${filter.gender ? `gender=${filter.gender}` : ""}&${
    filter.species ? `species=${filter.species}` : ""
  }
  `;

  useEffect(() => {
    (async function () {
      const res = await fetch(api);
      const data = await res.json();
      setData(data);
    })();
  }, [api]);

  return (
    <>
      <div className="container">
        <Search setPageNumber={setPageNumber} setSearch={setSearch} />
        <div className="row">
          <Filters />
          <div className="col-md-9">
            <div className="row">
              {results ? (
                <Cards results={results} />
              ) : data.error ? (
                <h2>{data.error}</h2>
              ) : (
                <h2>Loading...</h2>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div
          className="col-md-9 offset-md-3  text-center my-4 "
          data-bs-outline="false"
        >
          {info && (
            <Paginate
              info={info}
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
