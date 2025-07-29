import { useQuery } from "@tanstack/react-query";
import { HomeStats } from "../../api/organizer/api/homeStats";

export const useHomeStats = () => {
    return useQuery({
        queryKey: ["stats"],
        queryFn: HomeStats,
    });
};
