import React from "react";
import ReactPaginate from "react-paginate";
import { useGlobalContext } from "../../context";

const Pagination = ({ info }) => {
  const { pageNumber, setPageNumber } = useGlobalContext();
  return (
    <ReactPaginate
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      pageCount={info.pages}
      className="pagination "
      pageClassName="page-item mx-2"
      pageLinkClassName="page-link"
      previousLinkClassName="btn btn-primary"
      nextLinkClassName="btn btn-primary"
      activeClassName="active "
      onPageChange={(page) => {
        setPageNumber(page.selected + 1);
      }}
    />
  );
};

/**
  const Pagination = ({ pageNumber, setPageNumber, info }) => {
    const prev = () => {
      if (pageNumber > 1) {
        setPageNumber(pageNumber - 1);
      }
    };
    const next = () => {
      if (pageNumber !== info.pages) {
        setPageNumber(pageNumber + 1);
      }
    };

    return (
      <div className="d-flex justify-content-center gap-5">
        <button
          disabled={`${pageNumber <= 1 ? "disabled" : ""}`}
          className={`btn btn-primary opacity-${pageNumber <= 1 ? "25" : "75"}`}
          onClick={prev}
        >
          Prev
        </button>
        <button
          disabled={`${pageNumber >= info.pages ? "disabled" : ""}`}
          className={`btn btn-primary opacity-${
            pageNumber >= info.pages ? "25" : "75"
          }`}
          onClick={next}
        >
          Next
        </button>
      </div>
    );
  };

*/
export default Pagination;
