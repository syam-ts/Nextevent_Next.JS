import { axiosInstanse } from "../../../lib/axios/axiosInstance";

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

type GetAllEventsResponse = {
    events: IEvent[];
};

export const GetAllEvents = async (): Promise<GetAllEventsResponse> => {
    const { data } = await axiosInstanse.get("/event/all-events");
    return data;
};
