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
  const { data, loading, fetchData } = useAPI();
  const user = data?.data.user;
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
      number: user?.appliedJob.length || 0,
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
          Good Morning <span className="text-main-blue50">{user?.name}</span>
        </h1>
      </div>
      <div className=" mt-3 py-3 border-y border-y-main-blue50">
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <div className="flex justify-start items-center gap-4">
            <img src="/vite.svg" alt="" width={50} height={50} />
            <div>
              <h2>{user?.title}</h2>
              <p className="text-mainText-p">@{user?.username}</p>
            </div>
          </div>
          <Link
            to={"edit"}
            className="border text-center p-3 border-main-blue50 font-semibold text-main-blue50 transition-colors hover:bg-main-blue50 hover:text-white"
          >
            Edit Profile
          </Link>
        </div>
        <div className="py-4">
          <h1 className=" text-mainText-t text-xl font-semibold mb-3">
            Skills
          </h1>
          <div className="flex gap-4 flex-wrap">
            {user?.skills.length === 0 && (
              <>
                <p className="font-normal text-base text-mainText-p">
                  You don't have any skills yet...
                </p>
              </>
            )}
            {user?.skills.map((skill) => (
              <p
                key={skill.value}
                className="px-2 py-1 sm:px-5 sm:py-3 text-mainText-t bg-mainText-p/50 rounded-md w-fit"
              >
                {skill.label}
              </p>
            ))}
          </div>
        </div>
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
        <p className="font-normal text-base text-mainText-p">
          Here is your job listing statistic report.{" "}
        </p>
        <ChartView />
      </div>
    </div>
  );
};

export default Profile;
