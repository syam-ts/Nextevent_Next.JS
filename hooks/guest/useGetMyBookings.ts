import { useQuery } from "@tanstack/react-query";

import { GetMyBookings } from "../../api/guest/myBookings";

export const useGetMyBookings = () => {
    return useQuery({
        queryKey: ["bookings"],
        queryFn: () => GetMyBookings(),
    });
};
