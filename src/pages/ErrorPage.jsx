import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  if (isRouteErrorResponse(err)) {
    return (
      <div className="text-2xl font-bold">
        <h1>{err.status}</h1>
        <p>{err.data?.message}</p>
      </div>
    );
  }
  if (err instanceof Error) {
    return <p className="text-2xl font-bold">Network error: {err.message}</p>;
  }
  return <p className="text-2xl font-bold">Unknown error</p>;
};

export default ErrorPage;
