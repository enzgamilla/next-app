"use client";
import Link from "next/link";
import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
  console.log(error);
  return (
    <>
      <div>An unexpected error has occuured.</div>
      <button className="btn btn-info" onClick={() => reset()}>
        Retry
      </button>
      <Link href="/" className="btn btn-primary">
        Return
      </Link>
    </>
  );
};

export default ErrorPage;
