"use client";

import { usePathname } from "next/navigation";

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
      {!notProvideThePageFor && <div className="text-white">Navbar</div>}
      {children}
      {!notProvideThePageFor && <div className="text-white">Footer</div>}
    </div>
  );
}
