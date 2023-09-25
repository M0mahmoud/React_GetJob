import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { skillsOptions } from "../../constant/skills";
import { useUser } from "../../context/user.context";
import { fetchURL } from "../../lib/fetchURL";
import useAPI from "../../lib/useAPI";
import ErrorDiv from "../UI/ErrorDiv";

const EditProfile = () => {
  const { userData, setUserData } = useUser();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
    title: "",
    skills: [],
  });

  const { data, error, loading, fetchData } = useAPI();

  const fetchUserData = useCallback(async () => {
    if (userData.username) {
      await fetchData(`http://localhost:8000/user/${userData.username}`);
    }
  }, [userData]);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  const {
    title = "",
    name = "",
    username = "",
    email = "",
    skills,
  } = data?.data?.user || {};
  useEffect(() => {
    if (data?.data?.user) {
      setForm({
        ...form,
        email,
        name,
        username,
        title,
        skills,
      });
    }
  }, [data]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSelectChange = (selectedOptions) => {
    setForm({ ...form, skills: selectedOptions });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedData = await fetchURL(
      `/user/${userData.username}`,
      "PATCH",
      {
        email: form.email,
        name: form.name,
        username: form.username,
        title: form.title,
        skills: form.skills,
      },
      userData.token
    );

    if (userData.username !== form.username) {
      setUserData((prev) => ({
        ...prev,
        username: form.username,
      }));
    }

    if (updatedData.status === "success") {
      navigate(-1);
    }
  };
  //TODO Add User

  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p
          tabIndex="0"
          className="focus:outline-none text-xl sm:text-2xl font-extrabold leading-6 text-gray-800"
        >
          Update Your Profile
        </p>
        <form onSubmit={handleSubmit} className="w-full mt-4 py-5">
          <div className="flex gap-4 flex-col md:flex-row items-center justify-between mb-4">
            <div className="w-full">
              <label
                htmlFor="name"
                className="text-sm font-medium leading-none text-gray-800"
              >
                Your Name
              </label>
              <input
                value={form.name}
                onChange={handleInputChange}
                aria-labelledby="name"
                type="text"
                id="name"
                name="name"
                className="bg-gray-200 border rounded  text-base font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-1 focus:outline-none "
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="title"
                className="text-sm font-medium leading-none text-gray-800"
              >
                Your Title
              </label>
              <input
                value={form.title}
                onChange={handleInputChange}
                aria-labelledby="title"
                type="text"
                id="title"
                name="title"
                className="bg-gray-200 border rounded  text-base font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-1 focus:outline-none "
              />
            </div>
          </div>
          <div className="flex gap-4 flex-col md:flex-row items-center justify-between mb-4">
            <div className="w-full">
              <label
                htmlFor="username"
                className="text-sm font-medium leading-none text-gray-800"
              >
                UserName
              </label>
              <input
                value={form.username}
                onChange={handleInputChange}
                aria-labelledby="username"
                type="text"
                id="username"
                name="username"
                className="bg-gray-200 border rounded  text-base font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-1 focus:outline-none "
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="email"
                className="text-sm font-medium leading-none text-gray-800"
              >
                Email
              </label>
              <input
                value={form.email}
                onChange={handleInputChange}
                aria-labelledby="email"
                type="email"
                name="email"
                id="email"
                className="bg-gray-200 border rounded  text-base font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-1 focus:outline-none "
              />
            </div>
          </div>
          <div className="w-full h-full">
            <label
              htmlFor="email"
              className="text-sm font-medium leading-none text-gray-800"
            >
              Select Your Skills
            </label>
            <Select
              isMulti
              onChange={handleSelectChange}
              value={form.skills}
              options={skillsOptions}
              openMenuOnFocus
              closeMenuOnSelect={false}
            />
          </div>
          <ErrorDiv error={error} />
          <div className="mt-8 inline-flex justify-center w-full">
            <button
              type="submit"
              role="button"
              className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 px-8 w-fit"
            >
              {loading ? "Loading..." : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
