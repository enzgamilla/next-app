import React from "react";
import style from "./loading.module.css";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-dvh">
      <span className="loading loading-ring loading-lg "></span>
    </div>
  );
};

export default Loading;
