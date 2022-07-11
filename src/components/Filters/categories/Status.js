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
        <div className="accordion-body">
          <div className="row">
            {status.map((item, index) => {
              return (
                <div className="col-md-6" key={index}>
                  <FilterButton item={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
