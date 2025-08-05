"use client";
import { useGetAllEvents } from "../../../hooks/guest/useGetAllEvents";
import EventCard from "../../../components/guest/event/EventCard";
import { useState } from "react";
import { Spinner } from "../../../components/lib/guest/Spinner";
import { IndianRupee, LocateFixedIcon } from "lucide-react";

const AllEventsPage = () => {
    
    const [filter, setFilter] = useState<string>("nearby");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const { data, isError, isLoading } = useGetAllEvents(filter, currentPage);

    if (!data) return;
    console.log(setCurrentPage);

    return (
        <div className="bg-white">
            {isLoading && <Spinner />}
            <div className="text-center mb-6">
                <h1 className="font-extrabold text-4xl text-orange-700 py-12">
                    All Events
                </h1>
            </div>

            <div className="flex gap-28">
                {/* Filter secton    */}
                <div className="fixed z-1 bg-white ml-20 pt-20 flex h-[calc(100vh-20rem)] flex-col rounded-xl bg-clip-border p-10 text-gray-700 shadow-xl shadow-blue-gray-900/5">
                    <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
                        <div
                            onClick={() => setFilter("nearby")}
                            role="button"
                            className="flex cursor-pointer border-b items-center w-full p-3 leading-tight transition-all outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                        >
                            <div className="grid mr-4 place-items-center">
                                <LocateFixedIcon />
                            </div>
                            Nearby
                        </div>

                        <div
                            onClick={() => setFilter("free")}
                            role="button"
                            className="flex border-b cursor-pointer items-center w-full p-3 leading-tight transition-all outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                        >
                            <div className="grid mr-4 place-items-center">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/128/3706/3706340.png"
                                    className="w-5 h-5"
                                    alt="free-icon"
                                />
                            </div>
                            Free
                        </div>

                        <div
                            onClick={() => setFilter("paid")}
                            role="button"
                            className="flex border-b items-center w-full p-3 cursor-pointer leading-tight transition-all outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                        >
                            <div className="grid mr-4 place-items-center">
                                <IndianRupee />
                            </div>
                            Paid
                        </div>
                    </nav>
                </div>

                <div className="relative ml-[35rem]">
                    <EventCard data={data} isError={isError} isLoading={isLoading} />
                </div>
            </div>
        </div>
    );
};

export default AllEventsPage;
