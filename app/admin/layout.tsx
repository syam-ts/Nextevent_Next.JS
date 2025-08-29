"use client";
import { Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation"; 
import ProtectedRoute from "../../(auth)/admin/ProtectedRoute";
import Sidebar from "../../components/admin/Sidebar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const noSidebar = ["/admin/login"];

  const notProvideThePageFor = noSidebar.includes(pathname);

  return (
    <div className="flex gap-12">
      {!notProvideThePageFor && <Sidebar />}
      <ProtectedRoute>{children}</ProtectedRoute>
      <Toaster /> 
    </div>
  );
}
