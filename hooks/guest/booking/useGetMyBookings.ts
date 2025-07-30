import { useQuery } from "@tanstack/react-query";
import { GetMyBookings } from "../../../api/guest/booking/myBookings";
 

export const useGetMyBookings = () => {
    return useQuery({
        queryKey: ["bookings"],
        queryFn: () => GetMyBookings(),
    });
};
