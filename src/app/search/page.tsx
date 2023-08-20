"use client";

import ProductsComp from "@/components/products/request/products";
import Sidebar from "@/components/sidebar/sidebar";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function SearchProductPage() {
  const search = useSearchParams();
  const query = search ? search.get("q") : null;
  const encodedQuery = encodeURI(query || "");
  const endpoint: string = `search/?q=${encodedQuery}`;
  return (
    <main className="p-3 bg-gray-100">
      <div>
        <h1 className="p-2 font-semibold text-base">
          Home &gt;&gt; Search &gt;&gt; {query}
        </h1>
        <div className="flex">
          <Sidebar />
          <ProductsComp api_endpoint={endpoint} />
        </div>
      </div>
    </main>
  );
}
