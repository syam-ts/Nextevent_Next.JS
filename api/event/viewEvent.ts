import axios from "axios"; 
import { IEvent } from "../../types/event";
import { config } from "../../utils/config";

interface ViewEventResponse {
    event: IEvent;
}

export const ViewEvent = async (
    eventId: string
): Promise<ViewEventResponse> => {
    const { data } = await axios.get(`${config.backend_url}/event/view/${eventId}`);
    return data;
};
