"use client";
import React from "react";
import { useGetMyEvents } from "../../../hooks/organizer/useGetMyEvents";
import EventCard from "../../../components/organizer/event/EventCard";
import { Spinner } from "../../../components/lib/organizer/Spinner"; 
const MyEventsPage = () => {
     

    const { data, isLoading } = useGetMyEvents();

    if (isLoading) return <Spinner />;
    if (!data) return;

    return (
        <div className="justify-center">
            <div className="justify-center text-center py-10">
                <h1 className="font-extrabold text-3xl mx-auto text-black">
                    My Events
                </h1>
            </div>
            <div className="justify-center mx-auto flex">
                <EventCard data={data} />
            </div>
        </div>
    );
};

export default MyEventsPage;
