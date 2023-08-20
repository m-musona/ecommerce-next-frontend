import ProductsComp from "@/components/products/request/products";
import Sidebar from "@/components/sidebar/sidebar";
import React from "react";

export default async function CategoryProductPage (
  {params: {category_id, sub_category_id},
}:{
  params: {category_id:string, sub_category_id:string},
}
) {
	category_id = decodeURIComponent(category_id);
	sub_category_id = decodeURIComponent(sub_category_id);
  const endpoint: string = `products/${category_id}/${sub_category_id}`;
  return (
    <main className="p-3 bg-gray-100">
      <div>
        <h1 className="p-2 font-semibold text-base">Home &gt;&gt; {category_id} &gt;&gt; {sub_category_id}</h1>
        <div className="flex">
          <Sidebar />
          <ProductsComp api_endpoint={endpoint} />
        </div>
      </div>
    </main>
  );
};
