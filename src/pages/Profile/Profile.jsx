import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import {
  faFile,
  faFileCircleCheck,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import ChartView from "../../components/UI/ChartView";
import Loading from "../../components/loading/Loading";
import { useUser } from "../../context/user.context";
import useAPI from "../../lib/useAPI";

const Profile = () => {
  const { userData } = useUser();
  const { data: user, loading, fetchData } = useAPI();
  console.log("user:", user);

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

  const DATA_CARDS = [
    {
      id: 1,
      title: "Total Jobs Applied",
      to: `applied-jobs`,
      number: user?.data.user?.appliedJob.length || 0,
      icon: faFile,
    },
    {
      id: 2,
      title: "Total Jobs View",
      to: "/",
      number: 14,
      icon: faFileCircleCheck,
    },
    {
      id: 3,
      title: " Messages Received",
      to: "/",
      number: 25,
      icon: faMessage,
    },
  ];

  return (
    <div className="py-4 ">
      <div className="flex flex-col">
        <h1 className="font-semibold text-2xl text-mainText-h">
          Good Morning{" "}
          <span className="text-main-blue50">{user?.data.user?.name}</span>
        </h1>
        <p className="font-normal text-base text-mainText-p">
          Here is your job listing statistic report.{" "}
        </p>
      </div>
      <div className="mt-5 flex flex-col md:flex-row justify-start gap-3 items-start">
        {DATA_CARDS.map((el) => (
          <Link
            key={el.id}
            to={el.to}
            role="heading"
            className="border w-full rounded-sm"
          >
            <h1 className="block p-2 mb-1 md:mb-2 font-semibold text-2xl text-mainText-h capitalize">
              {el.title}
            </h1>
            <div className=" flex justify-between items-end">
              <span className="p-2 text-4xl md:text-5xl text-main-footer2 font-bold">
                {el.number}
              </span>
              <FontAwesomeIcon
                icon={el.icon}
                className="text-3xl md:text-4xl p-2 text-main-blue50 font-bold "
              />
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-6">
        <ChartView />
      </div>
    </div>
  );
};

export default Profile;
