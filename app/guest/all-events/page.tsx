"use client"
import { useGetAllEvents } from "../../../hooks/guest/useGetAllEvents";
import EventCard from "../../../components/guest/event/EventCard";

const page = () => {
    const { data, isError, isLoading } = useGetAllEvents();
    if (!data) return;
    return (
        <div className="bg-white">
            <div className="text-center mb-6">
                <h1 className="font-extrabold text-4xl text-indigo-700 py-12">
                    All Events
                </h1>
            </div>

            <div className="bg-white">
                <EventCard data={data} isError={isError} isLoading={isLoading} />
            </div>
        </div>
    );
};

export default page;
