"use client";
import React from "react";
import EventCard from "./EventCard";
import { useGetLatestEvent } from "../../../hooks/guest/useGetLatestEvents";

const LatestEventsComponent = () => {
    const { data, isError, isLoading } = useGetLatestEvent();
    if (!data) return;

    return (
        <div>
            <EventCard data={data} isError={isError} isLoading={isLoading} />
        </div>
    );
};

export default LatestEventsComponent;
