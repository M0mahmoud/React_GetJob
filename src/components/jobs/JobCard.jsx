import React from "react";
import { Link } from "react-router-dom";
import formatTime from "../../lib/FormateDate";

const JobCard = ({ job }) => {
  return (
    <div className="w-full gap-4 flex flex-col md:flex-row items-stretch md:items-center justify-between border border-mainText-p rounded p-2 md:p-4">
      <div className=" flex gap-5 flex-col sm:flex-row">
        <img src="./vite.svg" width={60} height={60} alt="" />
        <div className="flex flex-col justify-center items-start gap-1">
          <Link to={job._id} className=" text-mainText-t text-xl font-semibold">
            {job.title}
          </Link>
          <p className="font-normal text-base text-mainText-p">
            {job.location}
          </p>
          <div className="flex gap-2 flex-col sm:flex-row">
            <p className="text-[#5cceaf] bg-green-500/5 text-sm  border border-[#5cceaf] font-medium rounded-full  px-3 py-1 w-fit">
              {job.jobType}
            </p>
            <div className="w-[2px] h-full bg-slate-300" />
            <div className="flex">
              {job.skillsRequired.map((skill, index) => (
                <p
                  key={index}
                  className={`border truncate  text-xs sm:text-sm font-medium px-2 py-1 rounded-full mr-1 sm:mr-2 ${
                    index === 0
                      ? "border-green-500/90 text-green-500/90"
                      : index < 2
                      ? "border-blue-500/90 text-blue-500/90"
                      : " hidden sm:block"
                  }`}
                >
                  {skill}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 flex-col  ">
        <Link
          to={job._id}
          className="w-full text-center sm:w-fit block border p-3 border-main-blue rounded font-semibold text-white bg-main-blue"
        >
          See More
        </Link>
        <p className="text-gray-500 text-sm">{formatTime(job.createdAt)}</p>
      </div>
    </div>
  );
};

export default JobCard;
