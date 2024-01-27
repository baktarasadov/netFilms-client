import React from "react";
import FilterItem from "../filterItem";

const FilterList = () => {
  return (
    <>
      <ul className="flex gap-5">
        <li>
          <FilterItem />
        </li>
        <li>
          <FilterItem />
        </li>
        <li>
          <FilterItem />
        </li>
      </ul>
    </>
  );
};

export default FilterList;
