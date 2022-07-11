import React from "react";

const FilterButton = ({ item }) => {
  return (
    <>
      <div className="form-check mb-4">
        <input
          className="btn-check"
          type="radio"
          name="flexRadioDefault"
          id={item}
        />
        <label className="btn btn-outline-primary" htmlFor={item}>
          {item}
        </label>
      </div>
    </>
  );
};

export default FilterButton;
