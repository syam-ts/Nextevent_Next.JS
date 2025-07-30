import { axiosInstanseGuest } from "../../lib/axios/guest/axiosInstance";
import { IEvent } from "../../types/event";

interface GetLtestEventResponse {
    events: IEvent[];
}

export const GetLtestEvents = async (): Promise<GetLtestEventResponse> => {
    const { data } = await axiosInstanseGuest("/event/latest");
    return data;
};
