"use client";

import React from "react";

import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import ProductList from "../productList";
import ProductsLoading from "../productsLoading";

const queryClient = new QueryClient();

export default function ProductComp() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductPage />
    </QueryClientProvider>
  );
}

function ProductPage() {
  const { isLoading, error, data }: any = useQuery("repoData", () =>
    fetch(`http://127.0.0.1:8000/api/products/`).then((res) => res.json())
  );

  if (isLoading)
    return (
      <div>
        <ProductsLoading />
        <ProductsLoading />
      </div>
    );

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      {data.map((product: any) => (
        <ProductList {...product} />
      ))}
    </div>
  );
}
