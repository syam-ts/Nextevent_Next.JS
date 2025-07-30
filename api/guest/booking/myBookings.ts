import { axiosInstanse } from "../../../lib/axios/axiosInstance";
import { IBooking } from "../../../types/booking";

  
interface BookingResponse {
    bookings: IBooking[];
}

export const GetMyBookings = async (): Promise<BookingResponse> => {
    const { data } = await axiosInstanse.get("/booking/my-bookings");
    return data;
};
