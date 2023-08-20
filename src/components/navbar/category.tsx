import Link from "next/link";
import React from "react";

const Category = ({ id, sub_category }: CategoryProps) => {
  return (
    <Link href={"/category"}>
      <div className="px-2">
        <div>{id}</div>
      </div>
    </Link>
  );
};

export default Category;
