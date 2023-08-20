import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductList = ({
  id,
  title,
  price,
  product_image,
  rating,
}: ProductProps) => {
  console.log(product_image);
  const product_image_url: string = `http://127.0.0.1:8000${product_image}`;
  return (
    <div className="m-2 p-5 flex bg-white w-min rounded-lg">
      <div className="ml-2 my-4 mr-6 w-[240px]">
        <Link href={`/product/${id}`}>
          <Image src={product_image_url} alt={title} width={240} height={175} />
        </Link>
      </div>
      <div className="w-[450px]">
        <Link href={`/product/${id}`}>
          <div className="text-2xl">
            <h2>{title}</h2>
          </div>
        </Link>
        <div className="flex">
          <div className="py-1 w-[300px]">
            <div>{rating}</div>
            <div className="text-xl font-semibold">${price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
