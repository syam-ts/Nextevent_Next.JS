import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-white border-gray-200 -900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link
                    href="/organizer/home"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img src="/logo.png" className="h-8" alt="NextEvent Logo" />
                    <span className="self-center text-black text-2xl font-semibold whitespace-nowrap ">
                        NextEvent
                    </span>
                </Link>
                <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button
                        type="button"
                        className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 -gray-600"
                        id="user-menu-button"
                        aria-expanded="false"
                        data-dropdown-toggle="user-dropdown"
                        data-dropdown-placement="bottom"
                    >
                        <span className="sr-only">Open user menu</span>
                        <img
                            className="w-8 h-8 rounded-full"
                            src="/docs/images/people/profile-picture-3.jpg"
                            alt="user photo"
                        />
                    </button>

                    <button
                        data-collapse-toggle="navbar-user"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 -400 -gray-700 -gray-600"
                        aria-controls="navbar-user"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="navbar-user"
                >
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white -800 md:-900 -700">
                        <li>
                            <Link
                                href="/organizer/home"
                                className="block py-2 px-3 text-white bg-blue-700 font-bold rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:-500"
                                aria-current="page"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/organizer/new-event"
                                className="block py-2 px-3 text-gray-900 rounded-sm font-bold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  md:-blue-500 -gray-700 -white md:-transparent -700"
                            >
                                New Event
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/organizer/my-events"
                                className="block py-2 px-3 text-gray-900 rounded-sm font-bold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  md:-blue-500 -gray-700 -white md:-transparent -700"
                            >
                                My Events
                            </Link>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-gray-900 rounded-sm font-bold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  md:-blue-500 -gray-700 -white md:-transparent -700"
                            >
                                About
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  md:-blue-500 -gray-700 -white md:-transparent -700"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
