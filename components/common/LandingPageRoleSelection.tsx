import React from "react";
import Link from "next/link";

const LandingPageRoleSelection: React.FC = () => {

    return (
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-66">
            <div className="bg-indigo-600 rounded-3xl p-8 text-center sm:p-16 md:px-24 md:py-20 lg:px-28">
                <div className="max-w-2xl mx-auto">
                    <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Are you Ready to explore the Diffrent Transitions.
                    </h2>
                    <p className="max-w-lg text-base text-indigo-100 mx-auto mt-4 sm:text-lg">
                        You can chose nextevent for showcasing your events or you can be
                        also a part of the events.
                    </p>
                </div>
                <div className="flex flex-col justify-center gap-4 mt-8 sm:flex-row sm:items-center sm:gap-5">
                    <Link
                        href="/organizer/login"
                        className="inline-flex items-center justify-center bg-white text-lg font-semibold text-indigo-600 shadow-sm transition-all duration-150 rounded-xl px-8 py-4 hover:bg-indigo-50 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        Organize Events
                    </Link>
                    <Link
                        href="/guest/login"
                        className="inline-flex items-center justify-center bg-indigo-600 text-lg font-semibold text-white shadow-sm ring-1 ring-inset ring-white transition-all duration-150 rounded-xl px-8 py-4 hover:bg-indigo-800"
                    >
                        Being a Guest
                    </Link>
                </div>
                <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium text-white mt-8">
                    <li className="inline-flex items-center gap-2">
                        <svg
                            aria-hidden="true"
                            className="h-5 w-5 shrink-0 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                        >
                            <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>
                        </svg>
                        Optimized Routing
                    </li>
                    <li className="inline-flex items-center gap-2">
                        <svg
                            aria-hidden="true"
                            className="h-5 w-5 shrink-0 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                        >
                            <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>
                        </svg>
                        Seamless payment integration with multiple providers
                    </li>
                    <li className="inline-flex items-center gap-2">
                        <svg
                            aria-hidden="true"
                            className="h-5 w-5 shrink-0 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                        >
                            <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>
                        </svg>
                        Support for 100+ locations
                    </li>
                    <li className="inline-flex items-center gap-2">
                        <svg
                            aria-hidden="true"
                            className="h-5 w-5 shrink-0 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                        >
                            <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>
                        </svg>
                        Improved and modernized UI
                    </li>
                    <li className="inline-flex items-center gap-2">
                        <svg
                            aria-hidden="true"
                            className="h-5 w-5 shrink-0 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                        >
                            <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>
                        </svg>
                        Effortless cancellation process
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default LandingPageRoleSelection;
