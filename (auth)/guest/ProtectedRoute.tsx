"use client";

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter, usePathname } from "next/navigation";
import { IGuestState } from "../../types/slice-states/guestState";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const isGuest = useSelector((state: IGuestState) => state.guest.isGuest);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const publicPaths = ["/guest/login", "/guest/signup"];

        if (!isGuest && !publicPaths.includes(pathname)) {
            router.replace("/guest/login");
        }
 
    }, [isGuest, pathname, router]);

    return <>{children}</>;
};

export default ProtectedRoute;
