import { useMutation } from "@tanstack/react-query";
import { newEvent } from "../api/newEvent";

type NewEventPayload = {
    eventName: string;
    eventImage: string;
    location: string;
    date: string;
    startTime: string;
    endTime: string;
    totalSeats: number;
    isPaid: boolean;
    details: string;
};

export const useNewEvent = () => {
    return useMutation({
        mutationFn: (payload: NewEventPayload) => newEvent(payload),
    });
};
