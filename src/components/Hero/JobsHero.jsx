import React from "react";

const JobsHero = () => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content py-10">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Find your new job today</h1>
          <p className="mb-5">
            Thousands of jobs in the computer, engineering and technology
            sectors are waiting for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobsHero;
