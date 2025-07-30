"use client"; 
import { usePathname } from "next/navigation"; 
import Navbar from "../../components/guest/Navbar";
import Footer from "../../components/common/Footer";
import { Toaster } from "react-hot-toast";
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
      <ProtectedRoute children={children} /> 
      <Toaster />
      {!notProvideThePageFor && <Footer />}
    </div>
  );
}
