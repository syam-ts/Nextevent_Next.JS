import { keepPreviousData, useQuery } from "@tanstack/react-query";  
import { GetAllEvents } from "../../api/guest/getAllEvents";

export const useGetAllEvents = (filter: string, currentPage: number, searchInput: string) => {
    return useQuery({
        queryKey: ["events", filter, currentPage, searchInput],
        queryFn:() => GetAllEvents(filter, currentPage, searchInput),
        placeholderData: keepPreviousData,
    });
};
