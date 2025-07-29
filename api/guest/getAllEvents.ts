import { axiosInstanse } from "../../lib/axios/axiosInstance";
import { IEvent } from "../../types/event";
 

type GetAllEventsResponse = {
    events: IEvent[];
};

export const GetAllEvents = async (): Promise<GetAllEventsResponse> => {
    const { data } = await axiosInstanse.get("/event/all-events");
    return data;
};
