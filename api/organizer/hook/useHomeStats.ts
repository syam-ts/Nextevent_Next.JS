import { useQuery } from "@tanstack/react-query";
import { HomeStats } from "../api/homeStats";

export const useHomeStats = () => {
    return useQuery({
        queryKey: ["stats"],
        queryFn: HomeStats,
    });
};
