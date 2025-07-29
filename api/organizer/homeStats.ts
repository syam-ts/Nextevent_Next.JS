import axios from "axios";
import { config } from "../../../utils/config";

type HomeStatsResponse = {
    totalEvents: number;
    totalBookings: number;
    totalGuests: number;
};

export const HomeStats = async (): Promise<HomeStatsResponse> => {
    const { data } = await axios.get(`${config.backend_url}/organizer/homeStats`);
    return data;
};
