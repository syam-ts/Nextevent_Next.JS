"use client";
import { useGetAllEvents } from "../../../hooks/guest/useGetAllEvents";
import EventCard from "../../../components/guest/event/EventCard";
import { useState } from "react"; 
import { Spinner } from "../../../components/lib/guest/Spinner";

const AllEventsPage = () => {

    const [filter, setFilter] = useState<string>("nearby");
    const [currentPage, setCurrentPage] = useState<number>(1);  
    const { data, isError, isLoading ,isPending} = useGetAllEvents(filter, currentPage);
 
    if (!data) return;

    return (
        <div className="bg-white">
            {
                isLoading && <Spinner />
            }
            <div className="text-center mb-6">
                <h1 className="font-extrabold text-4xl text-orange-700 py-12">
                    All Events
                </h1>
            </div>

                {/* Filter secton    */}
            <div className=" flex px-20 justify-end">
                <div className="relative">
                    <select
                        id="dynamicSelect"
                        className="bg-transparent text-center placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer w-[10rem]"
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option value="nearby"> nearby </option>
                        <option value="free"> free </option>
                        <option value="paid"> paid </option>
                    </select>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.2"
                        stroke="currentColor"
                        className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700 pointer-events-none"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                        />
                    </svg>
                </div>
            </div>

            <div className="bg-white">
                <EventCard data={data} isError={isError} isLoading={isLoading} />
            </div>
        </div>
    );
};

export default AllEventsPage;
