"use client";
import AllEventsPageUI from "./AllEventsPageUI";
import React, { useCallback, useEffect, useState } from "react";
import { useGetAllEvents } from "../../../hooks/guest/useGetAllEvents";
import { useDebounce } from "../../../hooks/custom/useDebounce";

const AllEventsPageContainer = () => {
  const [filter, setFilter] = useState<string>("nearby");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchInput, setSearchInput] = useState<string>("");
  const debounceSearch = useDebounce(searchInput);

  const { data, isError, isLoading } = useGetAllEvents(
    filter,
    currentPage,
    searchInput
  );

  const handleSetFilter = useCallback((newFilter: string) => {
    setFilter(newFilter);
  }, []);

  const handleSetSearchInput = useCallback((value: string) => {
    setSearchInput(value);
  }, []);

  useEffect(() => {
    handleSetSearchInput(debounceSearch);
  }, [debounceSearch]);

  if (isLoading) {
    return;
  }

  if (isError) {
    return (
      <div className="text-red-500 text-center">Failed to load events</div>
    );
  }

  if (!data) {
    return <div className="text-gray-500 text-center">No events found</div>;
  }
  return (
    <div>
      <AllEventsPageUI
        filter={filter}
        setFilter={handleSetFilter}
        searchInput={searchInput}
        setSearchInput={handleSetSearchInput}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        data={data}
        isError={isError}
        isLoading={isLoading}
      />
    </div>
  );
};

export default AllEventsPageContainer;
