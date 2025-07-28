"use client";
import React from "react";
import { useSelector } from "react-redux";

const NavDropdown = () => {
    const organizer = useSelector(
        (state: any) => state.organizer.currentOrganizer
    );
    return <div></div>;
};

export default NavDropdown;
