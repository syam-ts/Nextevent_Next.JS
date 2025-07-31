import Link from "next/link";
import React from "react";
import NavDropdown from "./NavDropdown";

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

                <div
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="navbar-user"
                >
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white -800 md:-900 -700">
        
                        <li>
                            <Link
                                  href="/organizer/home"
                                className="block py-2 px-3 text-gray-900 rounded-sm font-bold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  md:-blue-500 -gray-700 -white md:-transparent -700"
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
                            <Link
                                href="/organizer/about"
                                className="block py-2 px-3 text-gray-900 rounded-sm font-bold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  md:-blue-500 -gray-700 -white md:-transparent -700"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/organizer/faq"
                                className="block py-2 px-3 text-gray-900 rounded-sm font-bold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  md:-blue-500 -gray-700 -white md:-transparent -700"
                            >
                                Faq
                            </Link>
                        </li>
                        <li>
                            <Link
                                   href="/organizer/contact"
                                className="block py-2 px-3 text-gray-900 rounded-sm font-bold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  md:-blue-500 -gray-700 -white md:-transparent -700"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div className="pl-20">
                        <NavDropdown />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
