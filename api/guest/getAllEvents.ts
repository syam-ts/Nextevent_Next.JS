import { axiosInstanseGuest } from "../../lib/axios/guest/axiosInstance";
import { IEvent } from "../../types/event";

interface GetAllEventsResponse {
    events: IEvent[];
}

export const GetAllEvents = async (): Promise<GetAllEventsResponse> => {
    const { data } = await axiosInstanseGuest.get("/event/all-events");
    return data;
};
