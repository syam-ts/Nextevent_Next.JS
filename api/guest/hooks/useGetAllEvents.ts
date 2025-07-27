import { useQuery } from "@tanstack/react-query"; 
import { GetAllEvents } from "../api/getAllEvents";

export const useGetAllEvents = () => {
    return useQuery({
        queryKey: ["events"],
        queryFn: GetAllEvents,
    });
};
