"use client"
import React from "react";
import { useGetLatestEvent } from "../../../hooks/guest/useGetLatestEvents";
import EventCard from "./EventCard";

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
