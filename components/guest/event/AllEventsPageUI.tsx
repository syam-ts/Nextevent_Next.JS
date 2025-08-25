import React from "react"; 
import Searchbar from "./Searchbar";
import FilterSection from "./FilterSection";
import EventCard from "./EventCard"; 
import { IEvent } from "../../../types/event";

type AllEventsPageUIProps = {
  filter: string;
  setFilter: (filter: string) => void;
  searchInput: string;
  setSearchInput: (searchInput: string) => void;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
  data: {
    events: IEvent[];
  };
  isError: unknown;
  isLoading: unknown;
};

const AllEventsPageUI: React.FC<AllEventsPageUIProps> = React.memo(({
  filter,
  setFilter,
  searchInput,
  setSearchInput,
  currentPage,
  setCurrentPage,
  data,
  isError,
  isLoading,
}) => {
  return (
    <div className="bg-white">
      <div className="text-center mb-6">
        <h1 className="font-extrabold text-4xl text-orange-700 py-12">
          All Events
        </h1>
      </div>

      <div className="flex justify-center">
        <Searchbar
          input={searchInput}
          inputUpdateFunction={setSearchInput}
        />
      </div>

      <div className="flex gap-28">
        <FilterSection filterUpdate={setFilter} />

        <div className="relative ml-[35rem]">
          <EventCard data={data} isError={isError} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
});

export default AllEventsPageUI;
