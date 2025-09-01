"use client";
import React from "react";
import OrganizerTable from "./OrganizerTable";
import SearchComponent from "./SearchComponent";
import FilterComponent from "./FilterComponent";
import { IOrganizer } from "../../../types/organizer";
import PaginationComponent from "./PaginationComponent";

type Filter = "newest" | "oldest" | "mostevents";

type OrganizersUIProps = {
  filter: Filter;
  changeFilter: (filter: Filter) => void;
  currentPage: number;
  changePage: (page: number) => void;
  organizers: IOrganizer[];
  totalPages: number;
};

export const OrganizersUI: React.FC<OrganizersUIProps> = React.memo(
  ({
    filter,
    changeFilter,
    currentPage,
    changePage,
    organizers,
    totalPages,
  }) => {
    
    return (
      <div className="w-[60rem] mt-44 mx-52">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="border border-gray-200 rounded-xl divide-y divide-gray-200">
              <div className="py-3 px-4">
                <div className="flex justify-between">
                  
                  {/* Search component */}
                  <SearchComponent />

                  {/* filter section */}
                  <FilterComponent
                    filter={filter}
                    changeFilter={changeFilter}
                  />
                </div>
              </div>

              {/* table section  */}
              <OrganizerTable organizers={organizers} />
            </div>

            {/* Pagination component  */}
            <PaginationComponent
              currentPage={currentPage}
              changePage={changePage}
              totalPages={totalPages}
            />
          </div>
        </div>
      </div>
    );
  }
);

export default OrganizersUI;
