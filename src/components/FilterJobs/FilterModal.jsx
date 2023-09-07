import React, { useState } from "react";

const FilterModal = ({ filterData }) => {
  const [selectedFilters, setSelectedFilters] = useState({});
  const handleCheckboxChange = (filterName, optionValue, isChecked) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: {
        ...prevFilters[filterName],
        [optionValue]: isChecked,
      },
    }));
  };
  const handleFilterSubmit = (e) => {
    e.preventDefault();
    console.log(selectedFilters);
  };
  return (
    <dialog id="my_modal_5" className="modal modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Filter Jobs</h3>
        <div className="modal-action justify-center w-full">
          <form
            method="dialog flex gap-3 justify-between items-center w-full"
            onSubmit={handleFilterSubmit}
          >
            <div className="flex gap-3  flex-wrap" style={{ width: "100%" }}>
              {filterData.map((filterItem, index) => (
                <div key={index} className="flex flex-col gap-3 flex-grow">
                  <h2 className="text-mainText-t text-xl font-bold">
                    {filterItem.title}
                  </h2>
                  {filterItem.options.map((option, optionIndex) => (
                    <label
                      key={optionIndex}
                      className="flex items-center gap-1 font-medium text-base text-mainText-p"
                      htmlFor={filterItem.name}
                    >
                      <input
                        type="checkbox"
                        id={filterItem.name}
                        name={filterItem.name}
                        value={option}
                        checked={
                          selectedFilters[filterItem.name]?.[option] || false
                        }
                        onChange={(e) =>
                          handleCheckboxChange(
                            filterItem.name,
                            option,
                            e.target.checked
                          )
                        }
                      />
                      {option}
                    </label>
                  ))}
                </div>
              ))}
            </div>
            <button
              onClick={() => document.getElementById("my_modal_5").close()}
              className="btn bg-main-blue50 hover:bg-main-blue50/80 self-end"
            >
              Filter
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default FilterModal;
