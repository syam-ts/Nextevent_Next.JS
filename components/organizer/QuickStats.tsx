"use client";
import React from "react";
import { useHomeStats } from "../../api/organizer/hook/useHomeStats";

const QuickStats = () => {
    const { data, isLoading, error }: any = useHomeStats();

    // if (error) return <p className="text-red-500">Failed to load stats.</p>;

    const totalEvents = data?.toatalEvents ?? 0;
    const totalBookings = data?.totalBookings ?? 0;
    const totalGuests = data?.totalGuests ?? 0;

    return (
        <div className="bg-white">
            <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold leading-9 text-gray-900 sm:text-4xl sm:leading-10">
                        Quick Stats
                    </h2>
                    <p className="mt-3 text-xl leading-7 text-gray-600 sm:mt-4">
                        This package powers many production applications on many different
                        hosting platforms.
                    </p>
                </div>
            </div>
            <div className="pb-12 mt-10 bg-white sm:pb-16">
                <div className="relative">
                    <div className="absolute inset-0 h-1/2 bg-white"></div>
                    <div className="relative max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
                        <div className="mx-auto justify-center">
                            <dl className="bg-white rounded-lg flex justify-center gap-10">
                                <div className="flex flex-col p-6 text-center ">
                                    <dt
                                        className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500"
                                        id="item-1"
                                    >
                                        Total Events Created
                                    </dt>
                                    <dd
                                        className="order-1 text-5xl font-extrabold leading-none text-indigo-600"
                                        aria-describedby="item-1"
                                        id="starsCount"
                                    >
                                        {isLoading ? <p>...</p> : totalEvents}
                                    </dd>
                                </div>
                                <div className="flex flex-col p-6 text-center ">
                                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                                        Total Booking
                                    </dt>
                                    <dd
                                        className="order-1 text-5xl font-extrabold leading-none text-indigo-600"
                                        id="downloadsCount"
                                    >
                                        {isLoading ? <p>...</p> : totalBookings}
                                    </dd>
                                </div>
                                <div className="flex flex-col p-6 text-center ">
                                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                                        Total Guest
                                    </dt>
                                    <dd
                                        className="order-1 text-5xl font-extrabold leading-none text-indigo-600"
                                        id="sponsorsCount"
                                    >
                                        {isLoading ? <p>...</p> : totalGuests}
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickStats;
