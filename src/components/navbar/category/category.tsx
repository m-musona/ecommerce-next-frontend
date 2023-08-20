import Link from "next/link";
import React from "react";




const Category = ({ id, 
  electronics_sub_category, 
  fashion_sub_category, 
  watches_sub_category, 
  sports_and_leisure_sub_category, 
  appliances_sub_category }: CategoryProps) => {
  return (
    <div className="relative group">
      <Link href={`/category/${id}`}>
        <div className="px-2">
          <div>{id}</div>
        </div>
      </Link>
      <div className="absolute border border-solid border-fuchsia-950 hidden w-[200px] space-y-2 bg-white rounded group-hover:block">
        {electronics_sub_category.map((sub_category: any) => (
          <Link href={`/category/${id}/${sub_category}`}>
          <div className="block px-4 py-2 text-gray-600 hover:bg-gray-100">{sub_category}</div>
          <hr className="text-fuchsia-950"/>
        </Link>
        ))}
        {fashion_sub_category.map((sub_category: any) => (
          <Link href={`/category/${id}/${sub_category}`}>
          <div className="block px-4 py-2 text-gray-600 hover:bg-gray-100">{sub_category}</div>
          <hr className="text-fuchsia-950"/>
        </Link>
        ))}
        {watches_sub_category.map((sub_category: any) => (
          <Link href={`/category/${id}/${sub_category}`}>
          <div className="block px-4 py-2 text-gray-600 hover:bg-gray-100">{sub_category}</div>
          <hr className="text-fuchsia-950"/>
        </Link>
        ))}
        {sports_and_leisure_sub_category.map((sub_category: any) => (
          <Link href={`/category/${id}/${sub_category}`}>
          <div className="block px-4 py-2 text-gray-600 hover:bg-gray-100">{sub_category}</div>
          <hr className="text-fuchsia-950"/>
        </Link>
        ))}
        {appliances_sub_category.map((sub_category: any) => (
          <Link href={`/category/${id}/${sub_category}`}>
          <div className="block px-4 py-2 text-gray-600 hover:bg-gray-100">{sub_category}</div>
          <hr className="text-fuchsia-950"/>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
