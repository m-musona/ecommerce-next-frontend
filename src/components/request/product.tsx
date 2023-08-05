"use client";

import React from "react";

import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();

export default function ProductComp() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

function Example() {
  const { isLoading, error, data }: any = useQuery("repoData", () =>
    fetch(`${process.env.REACT_APP_BACKEND_URL}products/`).then((res) =>
      res.json()
    )
  );
  console.log(`url: ${process.env.REACT_APP_BACKEND_URL}`);
  console.log(`data: ${data}`);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <p>p</p>
    </div>
  );
}
