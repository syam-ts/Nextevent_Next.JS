 
import { axiosInstanseOrganizer } from "../../lib/axios/organizer/axiosInstance";
import { IEvent } from "../../types/event";
 
type GetMyEventsResponse = {
    events: IEvent[];
};

export const GetMyEvents = async (): Promise<GetMyEventsResponse> => {
    const { data } = await axiosInstanseOrganizer.get("/event/my-events");
    return data;
};
