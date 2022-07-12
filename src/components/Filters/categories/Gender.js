import React from "react";
import useCategories from "../../../customHooks/useCategories";
import FilterButton from "../FilterButton";

const Gender = () => {
  const { gender } = useCategories();
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
        >
          Gender
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse "
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex gap-3 flex-wrap">
          {gender.map((item, index) => {
            return <FilterButton key={index} type="gender" item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Gender;
