import { axiosInstanseOrganizer } from "../../lib/axios/organizer/axiosInstance";

type HomeStatsResponse = {
    totalEvents: number;
    totalBookings: number;
    totalGuests: number;
};

export const HomeStats = async (): Promise<HomeStatsResponse> => {
    const { data } = await axiosInstanseOrganizer.get(`$/organizer/homeStats`);
    return data;
};
