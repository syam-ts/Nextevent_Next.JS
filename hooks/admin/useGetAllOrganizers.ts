import { useQuery } from "@tanstack/react-query";
import { GetAllOrganizers } from "../../api/admin/getAllOrganizers";

export const useGetAllOrganizers = () => {
  return useQuery({
    queryKey: ["organizers"],
    queryFn: () => GetAllOrganizers(),
  });
};
