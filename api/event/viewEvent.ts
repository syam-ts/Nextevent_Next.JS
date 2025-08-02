import axios from "axios";
import { IEvent } from "../../types/event";
import { getConfig } from "../../utils/config";

interface ViewEventResponse {
    event: IEvent;
}

export const ViewEvent = async (
    eventId: string
): Promise<ViewEventResponse> => {
    const { backend_url } = getConfig();
    const { data } = await axios.get(`${backend_url}/event/view/${eventId}`);
    return data;
};
