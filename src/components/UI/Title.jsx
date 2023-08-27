import React from "react";

const Title = ({ title, titleblue }) => {
  return (
    <div>
      <h1>
        <span className="font-bold text-4xl text-mainText-h">{title}</span>
        <span className="font-bold text-4xl text-main-blue50">
          {" "}
          {titleblue}
        </span>
      </h1>
    </div>
  );
};

export default Title;
