import React from "react";
import { useGlobalContext } from "../../context";

const FilterButton = ({ item, type }) => {
  const { setFilter, setPageNumber } = useGlobalContext();

  const handleFilter = () => {
    setPageNumber(1);
    setFilter((prev) => {
      if (type === "status") {
        return { ...prev, status: item };
      } else if (type === "gender") {
        return { ...prev, gender: item };
      } else if (type === "species") {
        return { ...prev, species: item };
      }
    });
  };

  return (
    <div className=" ">
      <input
        className="btn-check"
        type="radio"
        name={type}
        id={`${type}-${item}`}
        onClick={handleFilter}
      />
      <label className="btn btn-outline-primary" htmlFor={`${type}-${item}`}>
        {item}
      </label>
    </div>
  );
};

export default FilterButton;
