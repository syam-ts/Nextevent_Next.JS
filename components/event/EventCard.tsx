"use client";
import React from "react";
import { useGetMyEvents } from "../../api/organizer/hook/useGetMyEvents";

const EventCard = () => {
    const { data, isLoading, isError } = useGetMyEvents();

    if (isLoading)
        return <p className="text-center text-gray-600">Loading events...</p>;
    if (isError || !data)
        return <p className="text-center text-red-500">Failed to load events.</p>;
    if (data.events.length === 0)
        return <p className="text-center text-gray-500">No events found.</p>;

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {data.events.map((event, index) => (
                <article className="flex w-2/3 justify-center mx-auto flex-col sm:flex-row bg-white  shadow-md ring-1 ring-indigo-100 overflow-hidden">
                    <img
                        src="/organizer/event-1.jpg"
                        alt="Event"
                        className="w-full sm:w-[20rem] h-60 object-cover"
                    />

                    <div className="p-6 flex flex-col justify-between flex-1">
                        <div>
                            <h3 className="text-2xl font-bold text-indigo-700 mb-2">
                               {event.eventName}
                            </h3>

                            <p className="text-gray-600 mb-4">
                               {event.details}
                            </p>

                            <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                                <span>
                                    <strong className="text-indigo-500">Location:</strong>{" "}
                                    {event.location}
                                </span>
                                <span>
                                    <strong className="text-indigo-500">Date:</strong> {event.date.toString()}
                                </span>
                                <span>
                                    <strong className="text-indigo-500">Time:</strong> {event.startTime} : {event.endTime}
                                </span>
                                <span>
                                    <strong className="text-indigo-500">Seats:</strong> {event.totalSeats}
                                </span>
                                <span>
                                    <strong className="text-indigo-500">Type:</strong> {event.isPaid ? 'paid': 'free'}
                                </span>
                            </div>
                        </div>

                        <div className="mt-6">
                            <a
                                href="#"
                                className="inline-block bg-indigo-600 text-white font-semibold px-5 py-2 rounded hover:bg-indigo-700 transition"
                            >
                                View Details
                            </a>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
};

export default EventCard;
