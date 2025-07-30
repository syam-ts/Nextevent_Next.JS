import { useQuery } from "@tanstack/react-query";
import { GetLtestEvents } from "../../api/guest/getLatestEvents";

export const useGetLatestEvent = () => {
    return useQuery({
        queryKey: ["events"],
        queryFn: () => GetLtestEvents(),
    });
};
