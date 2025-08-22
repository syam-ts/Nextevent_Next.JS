import { axiosInstanseGuest } from "../../lib/axios/guest/axiosInstance";
import { IEvent } from "../../types/event";

type GetAllEventsResponse = {
    events: IEvent[];
}

export const GetAllEvents = async (
    filter: string,
    currentPage: number
): Promise<GetAllEventsResponse> => {
    const { data } = await axiosInstanseGuest.get(
        `/event/all?currentPage=${currentPage}&filter=${filter}`
    );
    return data;
};
