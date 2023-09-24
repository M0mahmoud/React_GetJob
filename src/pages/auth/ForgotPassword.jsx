import { useState } from "react";
import { Link } from "react-router-dom";
import ErrorDiv from "../../components/UI/ErrorDiv";
import { fetchURL } from "../../lib/fetchURL";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await fetchURL("/user/forgetPassword", "POST", { email })
      .then((res) => {
        console.log(res);
        // if (res.status === "success") {
        setError(res);
        // TODO: Make Massge with Green Color
        // }
      })
      .catch((e) => {
        console.log("Error:", e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-4 px-4">
      <div className="flex flex-col items-center justify-center">
        <img src="./vite.svg" width={50} height={50} alt="LOGO" />
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-10"
        >
          <p
            tabIndex="0"
            className="focus:outline-none text-xl sm:text-2xl font-extrabold leading-6 text-gray-800"
          >
            Reset Your password
          </p>

          <div className="w-full mt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium leading-none text-gray-800"
            >
              Enter Your Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-labelledby="email"
              type="email"
              id="email"
              className="bg-gray-200 border rounded  text-base font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2 focus:outline-none "
            />
          </div>
          <ErrorDiv error={error} />
          <div className="mt-8">
            <button
              type="submit"
              role="button"
              className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </div>
          <p
            tabIndex="0"
            className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500"
          >
            Dont have account?{" "}
            <Link
              to={"/sign-up"}
              className="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none  text-gray-800 cursor-pointer"
            >
              {" "}
              SignUp
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
