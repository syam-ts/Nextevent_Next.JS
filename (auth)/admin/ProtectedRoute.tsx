"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter, usePathname } from "next/navigation";
import { IAdminState } from "../../types/slice-states/adminState";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const isAdmin = useSelector((state: IAdminState) => state.admin.isAdmin);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const publicPaths = ["/admin/login"];

    if (!isAdmin && !publicPaths.includes(pathname)) {
      router.replace("/admin/login");
    }
  }, [isAdmin, pathname, router]);

  return <>{children}</>;
};

export default ProtectedRoute;
