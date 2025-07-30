import { axiosInstanseGuest } from "../../../lib/axios/guest/axiosInstance";

  
interface CancelBookingPayload {
    bookingId: string;
}

interface CancelBookingReponse {
    success: boolean;
}

export const CancelBooking = async (
    payload: CancelBookingPayload
): Promise<CancelBookingReponse> => {
    const { data } = await axiosInstanseGuest.delete(
        `/booking/cancel/${payload.bookingId}`
    );

    return data;
};
