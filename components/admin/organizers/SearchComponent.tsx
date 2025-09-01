import React from "react";

export const SearchComponent = React.memo(() => {
  
  return (
    <div className="relative max-w-xs border rounded-xl   ">
      <label className="sr-only">Search</label>
      <input
        type="text"
        name="hs-table-search"
        id="hs-table-search"
        className="py-1.5 sm:py-1.5 px-3 ps-9 block w-full outline-none text-black border-gray-200 shadow-2xs rounded-lg sm:text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
        placeholder="Search for orgnaizer"
      />
      <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
        <svg
          className="size-4 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </svg>
      </div>
    </div>
  );
});

export default SearchComponent;
