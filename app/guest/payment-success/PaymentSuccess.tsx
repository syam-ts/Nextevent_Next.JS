"use client";
import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { config } from "../../../utils/config"; 
import { axiosInstanseGuest } from "../../../lib/axios/guest/axiosInstance";

const SuccessPage = () => {

    const searchParams = useSearchParams();
    const sessionId = searchParams.get("session_id");
    const eventId = searchParams.get("eventId");
    const router = useRouter();

    useEffect(() => {
        const createBooking = async () => {
            if (!sessionId || !eventId) return;

            await axiosInstanseGuest.post(
                `${config.backend_url}/booking/confirm`,
                {
                    sessionId,
                    eventId,
                },
                {
                    withCredentials: true,
                }
            );

            router.push("/guest/my-bookings");
        };

        createBooking();
    }, [sessionId]);

    return <div>Payment successful! Creating your booking...</div>;
};

export default SuccessPage;
