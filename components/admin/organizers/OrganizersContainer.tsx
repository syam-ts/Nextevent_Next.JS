"use client"
import OrganizersUI from "./OrganizersUi";
import React, { useCallback, useState } from "react";
import { useGetAllOrganizers } from "../../../hooks/admin/useGetAllOrganizers"; 

type Filter = "newest" | "oldest" | "mostevents";

const OrganizersContainer = () => {

  const [filter, setFilter] = useState<Filter>("newest");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data } = useGetAllOrganizers(currentPage, filter);

  
  const changeFilter = useCallback((filter: Filter): void => {
    setFilter(filter);
  }, []);
  
  const changePage = useCallback((page: number): void => {
    setCurrentPage(page);
  }, []);
  
  if (!data) return;

  return (
    <div>
      <OrganizersUI
        filter={filter}
        changeFilter={changeFilter}
        currentPage={currentPage}
        changePage={changePage}
        organizers={data.organizers}
        totalPages={data.totalPages}
      />
    </div>
  );
};

export default OrganizersContainer;
