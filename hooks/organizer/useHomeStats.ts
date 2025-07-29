import { useQuery } from "@tanstack/react-query"; 
import { HomeStats } from "../../api/organizer/homeStats";

export const useHomeStats = () => {
    return useQuery({
        queryKey: ["stats"],
        queryFn: HomeStats,
    });
};
