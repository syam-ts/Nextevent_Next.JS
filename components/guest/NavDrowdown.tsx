"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOutGuest } from "../../redux/slices/guestSlice";
import { IGuestState } from "../../types/slice-states/guestState";

const NavDropdown = () => {
    const [dropdown, setDropdown] = useState<boolean>(false);
    const dispatch = useDispatch();
    const guest = useSelector((state: IGuestState) => state.guest.currentGuest);

    const logout = () => {
        localStorage.removeItem("accessToken");
        dispatch(signOutGuest());
        window.location.href = "/guest/login";
    };

    return (
        <div>
            <div className="flex justify-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                {dropdown && (
                    <div className="bg-white absolute mt-12 divide-y divide-gray-100 border text-center rounded-lg shadow-sm w-36 ">
                        <ul
                            className="py-2 text-sm text-gray-700 "
                            aria-labelledby="dropdownDefaultButton"
                        >
                            <li>
                                <Link
                                    href="/guest/profile"
                                    className="block px-4 py-2 hover:bg-gray-100 -600 "
                                >
                                    Profile
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/guest/home"
                                    className="block px-4 py-2 hover:bg-gray-100 -600 "
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/guest/wallet"
                                    className="block px-4 py-2 hover:bg-gray-100 -600 "
                                >
                                    Wallet
                                </Link>
                            </li>
                            <li className="text-center flex justify-center">
                                <button
                                    onClick={logout}
                                    className="block px-4 cursor-pointer py-2 text-center hover:bg-gray-100 -600 "
                                >
                                     logout
                                </button>
                            </li>
                        </ul>
                    </div>
                )}

                <button
                    type="button"
                    onClick={() => setDropdown((prev) => !prev)}
                    className=" cursor-pointer text-sm w-8 h-8 bg-gray-700 hover:ring-2 hover:ring-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 "
                    id="user-menu-button"
                    aria-expanded="false"
                    data-dropdown-toggle="user-dropdown"
                    data-dropdown-placement="bottom"
                >
                    <span className="sr-only">Open user menu</span>

                    <img
                        src={guest?.profilePicture}
                        className="w-8 h-8 p-1  font-extrabold text-xl rounded-full"
                        alt='profile-pic'
                    />
                </button>
            </div>
        </div>
    );
};

export default NavDropdown;
