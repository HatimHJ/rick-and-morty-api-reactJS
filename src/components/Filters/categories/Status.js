import React from "react";
import FilterButton from "../FilterButton";
import useCategories from "../../../customHooks/useCategories";

const Status = () => {
  const { status } = useCategories();
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
        >
          Status
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex gap-3 flex-wrap">
          {status.map((item, index) => {
            return <FilterButton item={item} type="status" key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Status;
