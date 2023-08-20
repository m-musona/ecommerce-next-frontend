"use client";

import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Category from "./category";

const queryClient = new QueryClient();

const Categories = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CategoriesList />
    </QueryClientProvider>
  );
};

function CategoriesList() {
  const { isLoading, error, data }: any = useQuery("repoData", () =>
    fetch(`http://127.0.0.1:8000/api/categories/`).then((res) => res.json())
  );

  if (isLoading) return <div></div>;

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="flex">
      {data.map((category: any) => (
        <Category {...category} />
      ))}
    </div>
  );
}

export default Categories;
