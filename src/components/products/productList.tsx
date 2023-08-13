import Image from "next/image";
import React from "react";

const ProductList = ({
  title,
  price,
  features,
  product_image,
}: ProductProps) => {
  const product_image_url: string = `http://127.0.0.1:8000${product_image}`;
  return (
    <div className="m-2 p-5 flex bg-white w-min rounded-lg">
      <div className="ml-2 my-4 mr-6 w-[240px] h-[175px]">
        <Image src={product_image_url} alt={title} width={240} height={175} />
      </div>
      <div className="w-[450px]">
        <div className="text-2xl">
          <h2>{title}</h2>
        </div>
        <div className="flex">
          <div className="py-1 w-[300px]">
            <div>Rating</div>
            <div className="text-xl font-semibold">${price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
