import { IEvent } from "../../types/event";
import { axiosInstanseGuest } from "../../lib/axios/guest/axiosInstance";

type GetAllEventsResponse = {
    events: IEvent[];
};

export const GetAllEvents = async (
    filter: string,
    currentPage: number,
    searchInput: string
): Promise<GetAllEventsResponse> => {
    const { data } = await axiosInstanseGuest.get(
        `/event/all?currentPage=${currentPage}&filter=${filter}&input=${searchInput}`
    );
    return data;
};
