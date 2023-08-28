import React from "react";

const Loading = () => {
  return (
    <div className="loading-container min-h-[300px]">
      <img
        src="./vite.svg"
        alt=""
        width={45}
        height={45}
        className="loading-icon"
      />
    </div>
  );
};

export default Loading;
