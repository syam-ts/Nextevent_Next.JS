"use client";

import { usePathname } from "next/navigation"; 
import Navbar from "../../components/guest/Navbar";

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
      {!notProvideThePageFor && <div className="text-white">Footer</div>}
    </div>
  );
}
