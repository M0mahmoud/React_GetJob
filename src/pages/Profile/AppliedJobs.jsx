import React, { useCallback, useEffect, useMemo } from "react";
import JobCard from "../../components/jobs/JobCard";
import Loading from "../../components/loading/Loading";
import { useUser } from "../../context/user.context";
import useAPI from "../../lib/useAPI";

const AppliedJobs = () => {
  const { userData } = useUser();
  const { data: user, loading, fetchData } = useAPI();

  const AppliedJobs = user?.data.user?.appliedJob;
  console.log("AppliedJobs:", AppliedJobs);

  const userApiUrl = useMemo(
    () => `http://localhost:8000/user/${userData.username}`,
    [userData.username]
  );

  const fetchUserData = useCallback(async () => {
    if (userData.username) {
      await fetchData(userApiUrl);
    }
  }, [userData]);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  if (loading) return <Loading />;
  return (
    <div className="py-10">
      <h1 className="font-semibold text-2xl text-mainText-h mb-4">
        Total Applications: {AppliedJobs.length || 0}
      </h1>
      <h1 className="font-medium text-1xl text-mainText-h mb-4">
        TODO: Will Add More Data about All Applications
      </h1>
      <div className="flex gap-4 flex-col">
        {AppliedJobs?.map((job) => (
          <JobCard from={"AppliedJobs"} key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
