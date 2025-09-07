import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  if (isRouteErrorResponse(err)) {
    return (
      <div>
        <h1>{err.status}</h1>
        <p>{err.data?.message}</p>
      </div>
    );
  }
  if (err instanceof Error) {
    return <p>Network error: {err.message}</p>;
  }
  return <p>Unknown error</p>;
};

export default ErrorPage;
