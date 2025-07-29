import { axiosInstanse } from "../../lib/axios/axiosInstance";
import { IEvent } from "../../types/event";
 
type GetMyEventsResponse = {
    events: IEvent[];
};

export const GetMyEvents = async (): Promise<GetMyEventsResponse> => {
    const { data } = await axiosInstanse.get("/event/my-events");
    return data;
};
