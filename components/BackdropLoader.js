import React from "react";
const BackdropLoader = ({ open }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex items-center justify-center ${
        open ? "block" : "hidden"
      }`}
    >
      <div className="spinner"></div>
    </div>
  );
};

export default BackdropLoader;
