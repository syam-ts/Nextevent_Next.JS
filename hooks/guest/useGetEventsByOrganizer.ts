import { useQuery } from "@tanstack/react-query"; 
import { GetEventsByOrganizer } from "../../api/guest/getEventsByOrganizer";

export const useGetEventsByOrganizer = (organizerId: string, filter: string) => {
    return useQuery({
        queryKey: ["events", filter],
        queryFn: () => GetEventsByOrganizer(organizerId, filter),
    });
};
