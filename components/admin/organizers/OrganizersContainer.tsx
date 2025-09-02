"use client";
import toast from "react-hot-toast";
import OrganizersUI from "./OrganizersUi";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IAdminState } from "../../../types/slice-states/adminState";
import { useBlockOrganizer } from "../../../hooks/admin/organizer/useBlockOrganizer";
import { useUnBlockOrganizer } from "../../../hooks/admin/organizer/useUnBlockOrganizer";
import { useGetAllOrganizers } from "../../../hooks/admin/organizer/useGetAllOrganizers";
import {
  addOrganizers,
  blockOrganizer,
  unBlockOrganizer,
} from "../../../redux/slices/adminSlice";

type Filter = "newest" | "oldest" | "mostevents";

const OrganizersContainer = () => {

  const [filter, setFilter] = useState<Filter>("newest");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data } = useGetAllOrganizers(currentPage, filter);
  const { mutate: blockOrganizerMutate } = useBlockOrganizer();
  const { mutate: unBlockOrganizerMutate } = useUnBlockOrganizer();
  const dispatch = useDispatch();

  const organizers = useSelector(
    (state: IAdminState) => state.admin.organizers
  );

  const changeFilter = useCallback((filter: Filter): void => {
    setFilter(filter);
  }, []);

  const changePage = useCallback((page: number): void => {
    setCurrentPage(page);
  }, []);

  const blockOrganizerFunction = (organizerId: string): void => {
    blockOrganizerMutate(
      { organizerId },
      {
        onSuccess: () => {
          dispatch(blockOrganizer(organizerId));
          toast.success("Organizer blocked");
        },
        onError(error: unknown) {
          const err = error as { response: { data: { message: string } } };
          toast.error(err.response.data.message);
        },
      }
    );
  };

  const unBlockOrganizerFunction = (organizerId: string): void => {
    unBlockOrganizerMutate(
      { organizerId },
      {
        onSuccess: () => {
          dispatch(unBlockOrganizer(organizerId));
          toast.success("Organizer unblocked");
        },
        onError(error: unknown) {
          const err = error as { response: { data: { message: string } } };
          toast.error(err.response.data.message);
        },
      }
    );
  };

  if (!data) return;

  const fetchAllOrganizers = () => {
    dispatch(addOrganizers(organizers));
  };

  fetchAllOrganizers();

  return (
    <div>
      <OrganizersUI
        filter={filter}
        changeFilter={changeFilter}
        currentPage={currentPage}
        changePage={changePage}
        organizers={organizers}
        totalPages={data.totalPages}
        blockOrganizer={blockOrganizerFunction}
        unBlockOrganizer={unBlockOrganizerFunction}
      />
    </div>
  );
};

export default OrganizersContainer;
