"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();

    const encodedQuery = encodeURI(searchQuery);
    router.push(`/search?q=${encodedQuery}`);
  };
  return (
    <form onSubmit={onSearch}>
      <div className="flex mt-3">
        <input
          className="px-2 py-2 my-2 w-[450px] appearance-none border focus:outline-none border-gray-400 focus:border-green-500 rounded-tl-lg rounded-bl-lg"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 my-2 rounded-tr-lg rounded-br-lg"
          // href={`/search/${searchQuery}`}
        >
          <div className="w-[30px] hi[30px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 101 101"
              id="search"
            >
              <path d="M63.3 59.9c3.8-4.6 6.2-10.5 6.2-17 0-14.6-11.9-26.5-26.5-26.5S16.5 28.3 16.5 42.9 28.4 69.4 43 69.4c6.4 0 12.4-2.3 17-6.2l20.6 20.6c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7.9-.9.9-2.5 0-3.4L63.3 59.9zm-20.4 4.7c-12 0-21.7-9.7-21.7-21.7s9.7-21.7 21.7-21.7 21.7 9.7 21.7 21.7-9.7 21.7-21.7 21.7z"></path>
            </svg>
          </div>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
