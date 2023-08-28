import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../context/user.context";

const Header = () => {
  const { userData, setUserData } = useUser();

  const handleLogout = () => {
    setUserData({});
    localStorage.removeItem("userData");
  };
  return (
    <>
      <header className="w-100 py-2 mx-auto  items-center justify-between hidden sm:flex">
        <nav className="flex items-center gap-6">
          <div className="flex items-center">
            <img src="/vite.svg" alt="LOGO" />
            <h2 className="text-2xl font-bold text-mainText-t">GetJob</h2>
          </div>
          <div className="flex items-center gap-2">
            <Link to="jobs" className="text-1xl font-medium text-mainText-h">
              Find Job
            </Link>
            <Link
              to="companies"
              className="text-1xl font-medium text-mainText-h"
            >
              Browse Companies
            </Link>
          </div>
        </nav>
        <div className="flex items-center gap-2">
          {userData && userData.userId ? (
            <>
              <button
                onClick={handleLogout}
                className="border p-3 font-semibold text-main-blue"
              >
                Logout
              </button>
              <Link
                to="username"
                className="border p-3 border-main-blue font-semibold text-white bg-main-blue"
              >
                Profile
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
              <Link
                to="sign-up"
                className="border p-3 border-main-blue font-semibold text-white bg-main-blue"
              >
                SignUp
              </Link>
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
