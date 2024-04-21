"use client";
import { signOut } from "next-auth/react";

export default function SignOutBtn({
  icon,
  label = "Sign Out",
  className,
}: {
  icon?: React.ReactNode;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={className}
      onClick={() => signOut({ callbackUrl: "/login" })}
    >
      {icon}
      {label}
    </div>
  );
}
