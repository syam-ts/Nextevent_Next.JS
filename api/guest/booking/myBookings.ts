import { axiosInstanseGuest } from "../../../lib/axios/guest/axiosInstance";
import { IBooking } from "../../../types/booking";

interface BookingResponse {
    bookings: IBooking[];
}

export const GetMyBookings = async (): Promise<BookingResponse> => {
    const { data } = await axiosInstanseGuest.get("/booking/my-bookings");
    return data;
};
