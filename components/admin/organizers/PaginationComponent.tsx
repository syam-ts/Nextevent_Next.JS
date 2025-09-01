import React from "react";

type PaginationComponentProps = {
  currentPage: number;
  changePage: (page: number) => void;
  totalPages: number;
};

export const PaginationComponent: React.FC<PaginationComponentProps> =
  React.memo(({ currentPage, changePage, totalPages }) => {
    
    return (
      <div className="flex justify-center py-4">
        {/* Previous Button */}
        <button
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-8 rounded-full bg-slate-800 py-1 px-3 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 active:bg-slate-700 hover:bg-slate-700 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
        >
          {"<"}
        </button>

        {Array.from({ length: totalPages }).map((_, index) => {
          const page = index + 1;
          const isActive = page === currentPage;
          return (
            <button
              key={index}
              onClick={() => changePage(page)}
              className={`w-8 rounded-full border py-1 px-3 text-center text-sm transition-all shadow-sm ml-2
            ${isActive
                  ? "bg-slate-800 text-white border-slate-800"
                  : "text-slate-600 border-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800"
                }
            disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
            >
              {page}
            </button>
          );
        })}

        {/* Next Button */}
        <button
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-8 rounded-full border border-slate-300 py-1 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
        >
          {">"}
        </button>
      </div>
    );
  });

export default PaginationComponent;
