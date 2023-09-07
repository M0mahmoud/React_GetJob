import React from "react";

const FilterSlide = ({ filterJobs }) => {
  return (
    <div className="flex flex-col gap-4 mt-3">
      {filterJobs.map((filterItem, index) => (
        <div key={index} className="flex flex-col gap-4">
          <h2 className="text-mainText-t text-2xl font-bold">
            {filterItem.title}
          </h2>
          {filterItem.options.map((option, optionIndex) => (
            <label
              key={optionIndex}
              className="flex items-center gap-1 ps-2 font-medium text-lg text-mainText-p"
            >
              <input type="checkbox" name={filterItem.name} value={option} />
              {option}
            </label>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FilterSlide;
