import React from "react";

const ProductsLoading = () => {
  return (
    <div className="m-2 p-5 flex bg-white w-min rounded-lg">
      <div className="ml-2 my-4 mr-6 w-[240px] h-[175px] bg-gray-300"></div>
      <div className="w-[450px]">
        <div className="bg-gray-300 my-4 py-3 w-full" />
        <div className="bg-gray-300 my-4 py-3 w-1/2" />
      </div>
    </div>
  );
};

export default ProductsLoading;
