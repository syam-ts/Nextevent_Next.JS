import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { GetAllOrganizers } from "../../api/admin/getAllOrganizers";

export const useGetAllOrganizers = (currentPage: number, filter: string) => {
  return useQuery({
    queryKey: ["organizers", currentPage, filter],
    queryFn: () => GetAllOrganizers(currentPage, filter),
    placeholderData: keepPreviousData,
  });
};
