import React, { useEffect } from "react";

import { useLocation } from "react-router-dom";
import Pagination from "../../components/Paginator/Pagination";
import JobCard from "../../components/jobs/JobCard";
import Loading from "../../components/loading/Loading";
import useAPI from "../../lib/useAPI";

const FindJob = () => {
  const { pathname, search } = useLocation();
  const pageNumber = search.length !== 0 ? +search.slice(-1) : 1;
  const { data: jobs, loading, fetchData } = useAPI();

  useEffect(() => {
    fetchData(`http://localhost:8000/jobs/${pageNumber}`);
  }, [pageNumber]);

  let content;
  if (loading) {
    content = <Loading />;
  }

  if (jobs && !loading) {
    content = (
      <div className="grid grid-cols-1  gap-3">
        {jobs?.jobs?.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className="hero h-4/5 mb-5 relative">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              " url(https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80)",
          }}
        ></div>

        <div className="opacity-80 flex justify-center items-center gap-4 text-center text-neutral-content z-10 relative p-4">
          <div className="  inset-0 max-w-md mx-auto">
            <h1 className="mb-5 text-5xl text-white font-bold">
              Find your new job today
            </h1>
            <p className="mb-5 text-white text-base">
              Thousands of jobs in the computer, engineering and technology
              sectors are waiting for you.
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col gap-4 mt-3">
          <div className="flex flex-col gap-2">
            <h2 className="text-mainText-t text-2xl font-bold">
              Will Work Soon...
            </h2>
            <h2 className="text-mainText-t text-2xl font-bold">
              Type of Employment
            </h2>
            <label className="flex items-center gap-1 ps-4 font-medium text-lg text-mainText-p">
              <input type="checkbox" name="employment" value="full-time" />
              Full-time
            </label>
            <label className="flex items-center gap-1 ps-4 font-medium text-lg text-mainText-p">
              <input type="checkbox" name="employment" value="part-time" />
              Part-Time
            </label>
            <label className="flex items-center gap-1 ps-4 font-medium text-lg text-mainText-p">
              <input type="checkbox" name="employment" value="internship" />
              Internship
            </label>
            <label className="flex items-center gap-1 ps-4 font-medium text-lg text-mainText-p">
              <input type="checkbox" name="employment" value="remote" />
              Remote
            </label>
            <label className="flex items-center gap-1 ps-4 font-medium text-lg text-mainText-p">
              <input type="checkbox" name="employment" value="contract" />
              Contract
            </label>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-mainText-t text-2xl font-bold">Categories</h2>
            <label className="flex items-center gap-1 ps-4 font-medium text-lg text-mainText-p">
              <input type="checkbox" name="category" value="design" />
              Design
            </label>
            <label className="flex items-center gap-1 ps-4 font-medium text-lg text-mainText-p">
              <input type="checkbox" name="category" value="sales" />
              Sales
            </label>

            <label className="flex items-center gap-1 ps-4 font-medium text-lg text-mainText-p">
              <input type="checkbox" name="category" value="sales" />
              Engineering
            </label>

            <label className="flex items-center gap-1 ps-4 font-medium text-lg text-mainText-p">
              <input type="checkbox" name="category" value="sales" />
              Technology
            </label>

            <label className="flex items-center gap-1 ps-4 font-medium text-lg text-mainText-p">
              <input type="checkbox" name="category" value="sales" />
              Human Resource
            </label>
            <label className="flex items-center gap-1 ps-4 font-medium text-lg text-mainText-p">
              <input type="checkbox" name="category" value="sales" />
              Marketing
            </label>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-mainText-t text-2xl font-bold">Job Level</h2>
            <label className="flex items-center gap-1 ps-4 font-medium text-lg text-mainText-p">
              <input type="checkbox" name="level" value="entry-level" />
              Entry Level
            </label>
            <label className="flex items-center gap-1 ps-4 font-medium text-lg text-mainText-p">
              <input type="checkbox" name="level" value="mid-level" />
              Mid Level
            </label>
            <label className="flex items-center gap-1 ps-4 font-medium text-lg text-mainText-p">
              <input type="checkbox" name="level" value="senior-level" />
              Senior Level
            </label>
          </div>
        </div>
        <div className="w-full">
          <div className="py-3 ">
            <h3 className=" text-mainText-t text-2xl font-bold">All Jobs</h3>
            <p className="font-medium text-base text-mainText-p">
              Showing {jobs?.jobCount}
            </p>
          </div>

          {content}
        </div>
      </div>
      <Pagination
        isNext={jobs?.isNext}
        path={pathname}
        pageNumber={pageNumber}
      />
    </div>
  );
};

export default FindJob;
