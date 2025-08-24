"use client";
import { useEffect } from "react";
import { getConfig } from "../../../utils/config";
import { useSearchParams, useRouter } from "next/navigation";
import { axiosInstanseGuest } from "../../../lib/axios/guest/axiosInstance";

const SuccessPage = () => {

    const searchParams = useSearchParams();
    const sessionId = searchParams.get("session_id");
    const eventId = searchParams.get("eventId");
    const router = useRouter();
    const { backend_url }: { backend_url: string } = getConfig();

    useEffect(() => {
        const createBooking = async (): Promise<void> => {
            if (!sessionId || !eventId) return;

            await axiosInstanseGuest.post(
                `${backend_url}/booking/confirm`,
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
    }, [sessionId, eventId, router]);

    return <div>Payment successful! Creating your booking...</div>;
};

export default SuccessPage;
