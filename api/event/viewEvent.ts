import { axiosInstanse } from "../../lib/axios/axiosInstance";
import { IEvent } from "../../types/event";

interface ViewEventResponse {
    event: IEvent;
}

export const ViewEvent = async (
    eventId: string
): Promise<ViewEventResponse> => {
    const { data } = await axiosInstanse.get(`/event/view/${eventId}`);
    return data;
};
