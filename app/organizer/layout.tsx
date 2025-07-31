"use client";
import { usePathname } from "next/navigation";
import Navbar from "../../components/organizer/Navbar";
import Footer from "../../components/common/Footer";
import { Toaster } from "react-hot-toast";
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
      <ProtectedRoute>children={children}</ProtectedRoute>
      <Toaster />
      {!notProvideThePageFor && <Footer />}
    </div>
  );
}
