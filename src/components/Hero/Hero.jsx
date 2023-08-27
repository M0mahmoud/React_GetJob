import React from "react";
const Hero = () => {
  return (
    <div className="w-full h-[calc(100vh-66px)] flex justify-between items-center flex-col md:flex-row">
      <div className="flex items-start flex-col gap-8 justify-center h-full w-full">
        <h1 className="w-full">
          <span className="font-bold text-6xl text-mainText-h">
            Discover more than
          </span>
          <span className="font-bold text-6xl text-main-blue50">
            {" "}
            500+ jobs
          </span>
        </h1>
        <h3 className="font-semibold text-2xl text-mainText-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          perferendis quos iste odio ratione alias?
        </h3>
        <a
          href="#"
          className="text-2xl  border p-3 border-main-blue font-semibold text-white bg-main-blue"
        >
          Find Your Job
        </a>
      </div>
      <img src="/interview.svg" alt="" className="hidden md:block w-1/2" />
    </div>
  );
};

export default Hero;
