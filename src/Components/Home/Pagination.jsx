import React from "react";
import { searchResults } from "../../Fetch";

const Pagination = ({ page, setPage, totalPages, searchText, setGifs }) => {
  const handlePageChange = async (value) => {
    setPage(page + value);
    await searchResults(setGifs, searchText, page + value);
  };

  return (
    <div className="flex items-center border-t border-gray-200 bg-white m-10">
      <nav
        className="mx-auto isolate inline-flex -space-x-px rounded-md shadow-sm"
        aria-label="Pagination"
      >
        {page > 0 && (
          <a
            onClick={() => {
              handlePageChange(-1);
            }}
            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <span className="sr-only">Previous</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </a>
        )}
        {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
        <a
          href="#"
          aria-current="page"
          className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {page + 1}
        </a>

        {page + 1 < totalPages && (
          <a
            onClick={() => {
              handlePageChange(1);
            }}
            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </a>
        )}
      </nav>
    </div>
  );
};

export default Pagination;
