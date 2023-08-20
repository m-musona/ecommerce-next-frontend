"use client";

import React from "react";

import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import ProductList from "../productList";
import ProductsLoading from "../productsLoading";

const queryClient = new QueryClient();

interface ProductsCompProps {
  api_endpoint: string;
}
export default function ProductsComp(props: ProductsCompProps) {
  const api_route: string = `http://127.0.0.1:8000/api/${props.api_endpoint}`;
  return (
    <QueryClientProvider client={queryClient}>
      <ProductsPage api_route={api_route} />
    </QueryClientProvider>
  );
}

interface ProductsPageProps {
  api_route: string;
}
function ProductsPage(props: ProductsPageProps) {
  const { isLoading, error, data }: any = useQuery("repoData", () =>
    fetch(props.api_route).then((res) => res.json())
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
