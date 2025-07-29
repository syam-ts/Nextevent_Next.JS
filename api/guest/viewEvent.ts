import { axiosInstanse } from "../../lib/axios/axiosInstance";

 

interface IEvent {
    organizerId: string;
    eventName: string;
    eventImage: string;
    location: string;
    date: Date;
    startTime: string;
    endTime: string;
    totalSeats: number;
    isPaid: boolean;
    details: string;
}


type ViewEventResponse = {
    event: IEvent;
};

export const ViewEvent = async (
    eventId: string
): Promise<ViewEventResponse> => {
    const { data } = await axiosInstanse.get(`/event/view/${eventId}`);
    return data;
};
