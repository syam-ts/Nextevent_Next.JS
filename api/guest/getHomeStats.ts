import { axiosInstanseGuest } from "../../lib/axios/guest/axiosInstance";

interface GetHomeStatsResponse {
    stats: {
        totalEvents: number;
        totalBookings: number;
        totalOrganizers: number;
    };
}

export const GetHomeStats = async (): Promise<GetHomeStatsResponse> => {
    const { data } = await axiosInstanseGuest("/guest/home-stats");
    return data;
};
