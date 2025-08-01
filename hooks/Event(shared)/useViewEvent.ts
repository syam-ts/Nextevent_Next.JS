import { useQuery } from "@tanstack/react-query"; 
import { ViewEvent } from "../../api/event/viewEvent";

export const useViewEvent = (eventId: string) => {
    return useQuery({
        queryKey: ["event", eventId],
        queryFn: () => ViewEvent(eventId),
    });
};
