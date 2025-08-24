import { axiosInstanseOrganizer } from "../../lib/axios/organizer/axiosInstance";
import { IEvent } from "../../types/event";
import { INotification } from "../../types/notification";

type NewEventPayload = Omit<IEvent, "_id" | "organizerDetails" | "ticketPrice">;

type NewEventResponse = {
    notification: INotification,
    success: boolean;
};

export const newEvent = async (
    payload: NewEventPayload
): Promise<NewEventResponse> => {
    const { data } = await axiosInstanseOrganizer.post("/event/new", payload, {
        withCredentials: true,
    });
    return data;
};
