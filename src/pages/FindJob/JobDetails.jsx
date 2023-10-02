import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorDiv from "../../components/UI/ErrorDiv";
import Loading from "../../components/loading/Loading";
import { fetchURL } from "../../lib/fetchURL";
import useAPI from "../../lib/useAPI";

// TODO: While Cancellation Number Of Applicants Not Change.
const JobDetails = () => {
  const { jobId } = useParams();
  const { data: jobDetail, loading, fetchData, error } = useAPI();
  const [isApplied, setIsApplied] = useState(false);

  const TOKEN = JSON.parse(localStorage.getItem("userData"));
  const job = jobDetail?.data.job;

  console.log("job:", job);
  useEffect(() => {
    fetchData(`http://localhost:8000/job/${jobId}`);
    checkApplicationStatus();
  }, [jobId]);

  const checkApplicationStatus = async () => {
    const data = await fetchURL(
      "/user/checkApplication",
      "POST",
      {
        userId: TOKEN.userId,
        jobId,
      },
      TOKEN.token
    );
    if (data?.data?.hasApplied) {
      setIsApplied(true);
    }
  };

  const handleApply = async () => {
    const data = await fetchURL(
      "/user/apply",
      "POST",
      {
        userId: TOKEN.userId,
        jobId,
      },
      TOKEN.token
    );
    if (data.status === "success") {
      setIsApplied(true);
    }
  };
  const handleCancel = async () => {
    const data = await fetchURL(
      "/user/cancel",
      "POST",
      {
        userId: TOKEN.userId,
        jobId,
      },
      TOKEN.token
    );
    if (data.status === "success") {
      setIsApplied(false);
    }
  };

  if (loading) {
    return <Loading />;
  }
  if (!loading && error) {
    return <ErrorDiv error={error} />;
  }
  // TODO: Refactor this Component
  return (
    <div>
      <div className="flex gap-5 pb-8 flex-col sm:flex-row">
        <div>
          <img src="/vite.svg" alt="Image Icon" width={50} height={50} />
        </div>
        <div>
          <p className="font-normal text-base text-mainText-p">
            {job?.location}
          </p>
          <h1 className="mb-3 text-mainText-t text-xl font-semibold">
            {job?.title}
          </h1>
        </div>
      </div>
      <div className="flex gap-4 items-start">
        <p className="px-5 py-2 text-main-blue50 border border-text-main-blue50 bg-main-blue50/20 rounded-md w-fit capitalize">
          {job?.jobType.replace("-", " ")}
        </p>
        <p className="px-5 py-2 text-main-blue50 border border-text-main-blue50 bg-main-blue50/20 rounded-md w-fit capitalize">
          {job?.level.replace("-", " ")}
        </p>
      </div>
      <div className="my-4">
        <h1 className=" text-mainText-t text-xl font-semibold mb-3">
          Description
        </h1>
        <p className="font-normal text-lg text-mainText-p text-start max-w-4xl">
          {job?.description} Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ipsa, sit autem dolorum. <br /> deleniti neque consequatur,
          perspiciatis minus quos inventore aperiam amet quo laboriosam ipsum
          sed aliquid nihil placeat molestias facere. <br /> sit autem dolorum
          deleniti neque consequatur, perspiciatis minus quos inventore aperiam
          amet quo laboriosam ipsum sed aliquid nihil placeat molestias facere.
        </p>
      </div>
      <div className="py-8">
        <h1 className=" text-mainText-t text-xl font-semibold mb-3">Skills</h1>
        <div className="flex gap-4 flex-wrap">
          {job?.skills.map((skill) => (
            <p
              key={skill._id}
              className="px-5 py-3 text-mainText-t bg-mainText-p/50 rounded-md w-fit"
            >
              {skill.value}
            </p>
          ))}
        </div>
      </div>
      <div className="py-4 w-full">
        <p className="pb-3 font-medium text-base text-main-blue50">
          {job?.numApplicants == 0
            ? "No Applicants Yet..."
            : `${job?.numApplicants} Applicants`}
        </p>
        {!isApplied ? (
          <button
            onClick={handleApply}
            className="w-full text-center sm:w-fit block border p-3 border-main-blue rounded font-semibold text-white bg-main-blue"
          >
            {job?.isOpen ? "Apply" : "Closed"}
          </button>
        ) : (
          <button
            onClick={handleCancel}
            className="w-full text-center sm:w-fit block border p-3 border-main-blue rounded font-semibold text-white bg-main-blue"
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
};

export default JobDetails;
