import { useJwt } from "react-jwt";
import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ErrorDiv from "../../components/UI/ErrorDiv";
import useAPI from "../../lib/useAPI";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [notMatched, setNotMatched] = useState(false);
  const [form, setForm] = useState({
    password: "",
    confirmPassword: "",
  });
  let [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const { error, loading, fetchData, data } = useAPI();

  const { decodedToken, isExpired } = useJwt(token);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      form.password.toLocaleLowerCase() !==
      form.confirmPassword.toLocaleLowerCase()
    ) {
      setNotMatched((prev) => !prev);
    }
    try {
      await fetchData("http://localhost:8000/user/updatePassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: decodedToken.email,
          password: form.password,
        }),
      });
    } catch (err) {
      console.log("err:", err);
    }

    if (data?.status === "success") {
      navigate("/sign-in", {
        replace: true,
      });
    }
  };
  return (
    <>
      <div className="min-h-screen bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-4 px-4">
        <div className="flex flex-col items-center justify-center">
          <img src="./vite.svg" width={50} height={50} alt="LOGO" />
          {isExpired ? (
            <>
              <h1 className="mt-4 focus:outline-none text-2xl sm:text-4xl font-semibold leading-6 text-white">
                Your Link Is Expired...
              </h1>
            </>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-10"
            >
              <p
                tabIndex="0"
                className="focus:outline-none text-xl sm:text-2xl font-extrabold leading-6 text-gray-800"
              >
                Enter New Password
              </p>

              <div className="w-full mt-5">
                <label
                  htmlFor="pass"
                  className="text-sm font-medium leading-none text-gray-800"
                >
                  Password
                </label>
                <input
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  aria-labelledby="pass"
                  type="password"
                  id="pass"
                  className="bg-gray-200 border rounded  text-base font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2 focus:outline-none "
                />
              </div>
              <div className="w-full mt-5">
                <label
                  htmlFor="comfirmP"
                  className="text-sm font-medium leading-none text-gray-800"
                >
                  Confirm Password
                </label>
                <input
                  value={form.confirmPassword}
                  onChange={(e) =>
                    setForm({ ...form, confirmPassword: e.target.value })
                  }
                  aria-labelledby="comfirmP"
                  type="password"
                  id="comfirmP"
                  className="bg-gray-200 border rounded  text-base font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2 focus:outline-none "
                />
              </div>
              <div>
                <p className="text-red-500 my-2">
                  {notMatched && "Password Not Matched"}
                </p>
                <ErrorDiv error={error} />
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  role="button"
                  className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
                >
                  {loading ? "Loading..." : "Submit"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
