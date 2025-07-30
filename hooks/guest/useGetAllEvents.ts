import { useQuery } from "@tanstack/react-query";  
import { GetAllEvents } from "../../api/guest/getAllEvents";

export const useGetAllEvents = (filter: string, currentPage: number) => {
    return useQuery({
        queryKey: ["events", filter, currentPage],
        queryFn:() => GetAllEvents(filter, currentPage),
    });
};
