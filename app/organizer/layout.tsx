"use client";

import { usePathname } from "next/navigation";
import Navbar from "../../components/organizer/Navbar";
import Footer from "../../components/common/Footer";

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
      {children}
      {!notProvideThePageFor && <Footer />}
    </div>
  );
}
