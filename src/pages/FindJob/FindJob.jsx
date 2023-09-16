import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import FilterModal from "../../components/FilterJobs/FilterModal";
import FilterSlide from "../../components/FilterJobs/FilterSlide";
import JobsHero from "../../components/Hero/JobsHero";
import Pagination from "../../components/Paginator/Pagination";
import JobCard from "../../components/jobs/JobCard";
import Loading from "../../components/loading/Loading";
import { filterJobs } from "../../constant/filterJobs";
import useAPI from "../../lib/useAPI";

const FindJob = () => {
  const { pathname, search } = useLocation();
  const pageNumber = search.length !== 0 ? +search.slice(-1) : 1;
  const { data: jobs, loading, fetchData } = useAPI();
  console.log("jobs:", jobs);

  useEffect(() => {
    fetchData(`http://localhost:8000/jobs/${pageNumber}`);
  }, [pageNumber]);

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    }

    if (jobs && !loading) {
      return (
        <div className="grid grid-cols-1  gap-3">
          {jobs?.data.jobs.map((job) => (
            <JobCard from={"FindJob"} key={job._id} job={job} />
          ))}
        </div>
      );
    }
  };

  return (
    <div>
      <JobsHero />
      <div className="py-3 flex justify-between flex-wrap gap-3">
        <div className="">
          <h3 className=" text-mainText-t text-2xl font-bold">All Jobs</h3>
          <p className="font-medium text-base text-mainText-p">
            Showing {jobs?.data.jobCount}
          </p>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="w-full block border p-3  rounded font-semibold text-mainText-t  border-mainText-p bg-mainText-p "
          >
            Filter Jobs
          </button>
        </div>
      </div>
      <div className="w-full flex gap-4">
        <div className="flex gap-5 flex-grow">
          <div className="hidden lg:block min-w-[200px]">
            <FilterSlide filterJobs={filterJobs} />
          </div>
          <div className="w-full">{renderContent()}</div>
        </div>
      </div>
      <Pagination
        isNext={jobs?.data.isNext}
        path={pathname}
        pageNumber={pageNumber}
      />
      <>
        <FilterModal filterData={filterJobs} />
      </>
    </div>
  );
};

export default FindJob;
