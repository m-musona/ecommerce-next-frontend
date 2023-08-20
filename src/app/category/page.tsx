import ProductComp from "@/components/products/request/product";
import Sidebar from "@/components/sidebar/sidebar";
import React from "react";

const Page = () => {
  return (
    <main className="p-3 bg-gray-100">
      <div>
        <h1 className="p-2 font-semibold text-xl">Category</h1>
        <div className="flex">
          <Sidebar />
          <ProductComp />
        </div>
      </div>
    </main>
  );
};

export default Page;
