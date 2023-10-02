import React, { useState } from "react";

const FilterModal = ({ filterData, setFilter }) => {
  const [selectedFilters, setSelectedFilters] = useState({});

  const handleCheckboxChange = (filterName, optionValue, isChecked) => {
    setSelectedFilters((prevFilters) => {
      return {
        ...selectedFilters,
        [filterName]: {
          ...prevFilters[filterName],
          [optionValue]: isChecked,
        },
      };
    });
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    setFilter(() => ({ ...selectedFilters }));
  };

  return (
    <dialog id="my_modal_5" className="modal modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Filter Jobs</h3>
        <div className="modal-action justify-center w-full">
          <form
            method="dialog"
            style={{ width: "100%" }}
            onSubmit={handleFilterSubmit}
          >
            <div className="flex gap-3 mb-4 flex-wrap justify-between">
              {filterData.map((filterItem, index) => (
                <div key={index} className="flex flex-col gap-3 flex-grow">
                  <h2 className="text-mainText-t text-xl font-bold">
                    {filterItem.title}
                  </h2>
                  {filterItem.options.map((option, optionIndex) => (
                    <label
                      key={optionIndex}
                      className="flex items-center gap-1 font-medium text-base text-mainText-p capitalize"
                      htmlFor={option}
                    >
                      <input
                        type="checkbox"
                        id={option}
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
