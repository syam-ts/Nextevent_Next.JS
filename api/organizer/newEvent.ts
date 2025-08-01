import { axiosInstanseOrganizer } from "../../lib/axios/organizer/axiosInstance";
 
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

type NewEventResponse = {
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
