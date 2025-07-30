"use client"; 
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter, usePathname } from "next/navigation"; 
import { IOrganizerState } from "../../types/slice-states/organizerState";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const isOrganizer = useSelector((state: IOrganizerState) => state.organizer.isOrganizer);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const publicPaths = ["/organizer/login", "/organizer/signup"];

        if (!isOrganizer && !publicPaths.includes(pathname)) {
            router.replace("/organizer/login");
        }
 
    }, [isOrganizer, pathname, router]);

    return <>{children}</>;
};

export default ProtectedRoute;
