import { useQuery } from "@tanstack/react-query";
import { GetHomeStats } from "../../api/guest/getHomeStats";

export const useGetHomeStats = () => {
    return useQuery({
        queryKey: ["stats"],
        queryFn: () => GetHomeStats(),
    });
};
