import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../context/user.context";
import useAPI from "../../lib/useAPI";

const Header = () => {
  const { userData, setUserData } = useUser();
  const { data: user, loading, fetchData } = useAPI();

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

  const handleLogout = () => {
    setUserData({});
    localStorage.removeItem("userData");
  };
  return (
    <>
      <header className="navbar bg-base-100 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FontAwesomeIcon className="text-main-blue" icon={faBars} />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link
                  to="jobs"
                  className="text-1xl font-medium text-mainText-h"
                >
                  Find Job
                </Link>
              </li>
              <li>
                <Link
                  to="companies"
                  className="text-1xl font-medium text-mainText-h"
                >
                  Browse Companies
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="flex items-center">
            <img src="/vite.svg" alt="LOGO" />
            <h2 className="text-2xl font-bold text-mainText-t">GetJob</h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="jobs" className="text-1xl font-medium text-mainText-h">
                Find Job
              </Link>
            </li>
            <li>
              <Link
                to="companies"
                className="text-1xl font-medium text-mainText-h"
              >
                Browse Companies
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-2">
            {userData && userData.userId ? (
              <>
                {/* <button
                  onClick={handleLogout}
                  className="border p-3 font-semibold text-main-blue"
                >
                  Logout
                </button> */}
                <Link
                  to={user?.data.user.username}
                  className="border p-3 border-main-blue font-semibold text-white bg-main-blue"
                >
                  {loading ? "loading" : user?.data.user.name.split(" ")[0]}
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="sign-in"
                  className="border p-3 font-semibold text-main-blue"
                >
                  SignIn
                </Link>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
