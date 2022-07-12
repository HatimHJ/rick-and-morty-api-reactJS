import React from "react";
import FilterButton from "../FilterButton";
import useCategories from "../../../customHooks/useCategories";

const Species = () => {
  const { species } = useCategories();

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          Species
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex gap-3 flex-wrap">
          {species.map((item, index) => {
            return <FilterButton item={item} type="species" key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Species;
