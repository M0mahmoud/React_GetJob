import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import FilterModal from "../../components/FilterJobs/FilterModal";
import JobsHero from "../../components/Hero/JobsHero";
import Pagination from "../../components/Paginator/Pagination";
import JobCard from "../../components/jobs/JobCard";
import Loading from "../../components/loading/Loading";
import { filterJobs } from "../../constant/filterJobs";
import useAPI from "../../lib/useAPI";

// TODO: Refactor this Page
const FindJob = () => {
  console.count("RERENDER");
  const { data, loading, fetchData } = useAPI();
  const [filter, setFilter] = useState({});
  const [searchParams, setSearchParams] = useSearchParams(
    {
      page: 1,
      level: "",
      type: "",
    },
    { replace: true }
  );

  useEffect(() => {
    Object.keys(filter).forEach((key) => {
      setSearchParams(
        (prev) => {
          prev.delete(key);
          prev.set("page", searchParams.get("page") || 1);
          return prev;
        },
        { replace: true }
      );

      const values = filter[key];
      const selectedValues = Object.keys(values)
        .filter((value) => {
          return values[value] == true;
        })
        .join(" ");

      if (selectedValues) {
        setSearchParams(
          (prev) => {
            prev.set(key, selectedValues);
            return prev;
          },
          { replace: true }
        );
      }
    });
  }, [filter]);

  useEffect(() => {
    fetchData(
      `http://localhost:8000/jobs?page=${+searchParams.get(
        "page"
      )}&level=${searchParams.getAll("level")}&type=${searchParams.getAll(
        "type"
      )}`
    );
  }, [searchParams.get("page"), filter]);

  return (
    <div>
      <JobsHero />
      <div className="py-3 flex justify-between flex-wrap gap-3">
        <div className="">
          <h3 className=" text-mainText-t text-2xl font-bold">
            All Jobs {data?.data?.allJobCount}{" "}
          </h3>
        </div>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="w-full block border p-3  rounded font-semibold text-mainText-t  border-mainText-p bg-mainText-p "
          >
            Filter Jobs
          </button>
          <button
            style={{ textWrap: "nowrap" }}
            className="w-full block border p-3  rounded font-semibold text-white  border-mainText-p bg-mainText-h "
            onClick={() => {
              setSearchParams(
                (prev) => {
                  prev.set("level", "");
                  prev.set("type", "");
                  prev.set("page", 1);
                  return prev;
                },
                { replace: true }
              );
              setFilter({});
            }}
            type="reset"
          >
            Reset Fillter
          </button>
        </div>
      </div>
      <div className="w-full flex gap-4">
        <div className="flex gap-5 flex-grow">
          <div className="w-full">
            {loading && <Loading />}
            {!loading && data?.data && (
              <div className="grid grid-cols-1  gap-3">
                {data?.data?.jobs.map((job) => (
                  <JobCard from={"FindJob"} key={job._id} job={job} />
                ))}
              </div>
            )}
            {!loading && data?.data?.jobs.length === 0 && (
              <h1>No Jobs Founded...</h1>
            )}
          </div>
        </div>
      </div>
      <Pagination
        isNext={data?.data?.isNext}
        pageNumber={searchParams.get("page")}
        setSearchParams={setSearchParams}
      />
      <>
        <FilterModal setFilter={setFilter} filterData={filterJobs} />
      </>
    </div>
  );
};

export default FindJob;
