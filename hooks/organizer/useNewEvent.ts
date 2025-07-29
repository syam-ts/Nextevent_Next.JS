import { useMutation } from "@tanstack/react-query"; 
import { newEvent } from "../../api/organizer/newEvent";
import { IEvent } from "../../types/event";

type NewEventPayload =  IEvent;

export const useNewEvent = () => {
    return useMutation({
        mutationFn: (payload: NewEventPayload) => newEvent(payload),
    });
};
