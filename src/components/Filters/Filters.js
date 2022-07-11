import React from "react";
import Gender from "./categories/Gender";
import Status from "./categories/Status";
import Species from "./categories/Species";

const Filters = () => {
  return (
    <div className="col-md-3 mb-sm-2 mb-md-0 text-center">
      <h3 className="custom-shadow p-2 text-white bg-primary">Filter</h3>
      <button type="button" className=" btn btn-link my-2">
        Clear Filters
      </button>
      {/* Accordion */}
      <div className="accordion" id="accordionExample">
        <Status />
        <Species />
        <Gender />
      </div>
    </div>
  );
};

export default Filters;
