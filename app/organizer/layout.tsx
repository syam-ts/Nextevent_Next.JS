"use client";
import { Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/organizer/Navbar";
import ProtectedRoute from "../../(auth)/organizer/ProtectedRoute";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const noNavFooter = ["/organizer/login", "/organizer/signup"];

  const notProvideThePageFor = noNavFooter.includes(pathname);

  return (
    <div>
      {!notProvideThePageFor && <Navbar />}
      <ProtectedRoute>{children}</ProtectedRoute>
      <Toaster />
      {!notProvideThePageFor && <Footer />}
    </div>
  );
}
