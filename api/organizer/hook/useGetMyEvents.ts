import { useQuery } from "@tanstack/react-query";
import { GetMyEvents } from "../api/getMyEvents";

export const useGetMyEvents = () => {
    return useQuery({
        queryKey: ["events"],
        queryFn: GetMyEvents,
    });
};
