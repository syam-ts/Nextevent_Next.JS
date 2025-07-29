"use client"; 
import React from "react"; 
import { useGetMyEvents } from "../../../hooks/organizer/useGetMyEvents";
import EventCard from "../../../components/organizer/event/EventCard";

interface IEvent {
  _id: string;
  organizerId: string;
  eventName: string;
  eventImage: string;
  location: string;
  date: Date;
  startTime: string;
  endTime: string;
  totalSeats: number;
  isPaid: boolean;
  details: string;
}

interface IE {
  events: IEvent[];
}

const page = () => {

  const {
    data,
    isError,
    isLoading,
  }: { data: any; isError: any; isLoading: any } = useGetMyEvents();
   if (isLoading) {
    return <p className="text-center py-10 text-gray-500">Loading events...</p>;
  }

  if (isError) {
    return <p className="text-center py-10 text-red-500">Failed to load events.</p>;
  }
  if (!data) return;


  return (
    <div className="w-screen bg-white justify-center">
      <div className="justify-center text-center py-10">
        <h1 className="font-extrabold text-3xl mx-auto text-black">
          My Events
        </h1>
      </div>
      <div className="justify-center mx-auto flex">
        <EventCard data={data} isError={isError} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default page;
