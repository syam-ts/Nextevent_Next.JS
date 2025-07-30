"use client";
import React from "react";
import BookingCard from "./BookingCard";
import { useGetMyBookings } from "../../../hooks/guest/booking/useGetMyBookings";

const page: React.FC = () => {
    const { data } = useGetMyBookings();

    return (
        <div className="min-h-screen bg-white w-full p-8 pt-20">
            <div className="w-2/3 mx-auto">
                <h1 className="text-3xl font-bold text-orange-500 text-center mb-12">
                    Bookings
                </h1>

                <div>
                    <BookingCard bookings={data?.bookings} />
                </div>
            </div>
        </div>
    );
};

export default page;
