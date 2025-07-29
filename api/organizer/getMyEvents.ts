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

type GetMyEventsResponse = {
    events: IEvent[];
};

export const GetMyEvents = async (): Promise<GetMyEventsResponse> => {
    const { data } = await axiosInstanse.get("/event/my-events");
    return data;
};
