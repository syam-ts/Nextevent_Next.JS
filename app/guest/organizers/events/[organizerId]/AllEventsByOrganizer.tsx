"use client";
import React, { useState } from "react";
import { useGetEventsByOrganizer } from "../../../../../hooks/guest/useGetEventsByOrganizer";
import { IEvent } from "../../../../../types/event";
import EventCard from "../../../../../components/guest/event/EventCard";

type AllEventsByOrganizerProps = {
  organizerId: string;
};

const AllEventsByOrganizer: React.FC<AllEventsByOrganizerProps> = ({
  organizerId,
}) => {
  const [filter, setFilter] = useState<string>("false");
  const { data, isError, isLoading } = useGetEventsByOrganizer(
    organizerId,
    filter
  );
  if (!data) return;

  const events: IEvent[] = data?.events;
 
   console.log(filter);

  return (
    <div>
      <div className="text-center mb-6">
        <h1 className="font-extrabold text-4xl text-orange-700 py-12">
          All Events
        </h1>
      </div>
      <div className="flex justify-end px-28">
        <form className="w-44 justify-end ">
          <label className="block mb-2 text-sm font-bold text-center text-black">
            Select Event Options
          </label>
          <select
             onChange={(e) => setFilter(e.target.value)}
            className="bg-white text-center outline-none font-bold border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="false">
              Upcoming
            </option>
            <option value="true">Expired</option>
          </select>
        </form>
      </div>
      <EventCard data={data} isError={isError} isLoading={isLoading} />
    </div>
  );
};

export default AllEventsByOrganizer;
