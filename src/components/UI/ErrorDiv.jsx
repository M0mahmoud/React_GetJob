import React from "react";

const ErrorDiv = ({ error }) => {
  return (
    <div className="mt-4">
      {error && (
        <div className="text-red-500">
          {error?.data?.msg || error?.data?.errors[0].msg}
        </div>
      )}
    </div>
  );
};

export default ErrorDiv;
