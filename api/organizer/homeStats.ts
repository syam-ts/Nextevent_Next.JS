import { axiosInstanseOrganizer } from "../../lib/axios/organizer/axiosInstance";

type HomeStatsResponse = {
    totalEventsCreated: number;
    totalTicket: number;
    totalGuests: number;
};

export const HomeStats = async (): Promise<HomeStatsResponse> => {
    const { data } = await axiosInstanseOrganizer.get(`/organizer/getHome-stats`);
    return data;
};
