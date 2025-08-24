"use client";
import { Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation";
import Navbar from "../../components/guest/Navbar";
import Footer from "../../components/common/Footer";
import ProtectedRoute from "../../(auth)/guest/ProtectedRoute";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const noNavFooter = ["/guest/login", "/guest/signup"];

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
