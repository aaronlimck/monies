"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabItems = [
  { label: "Overview", href: "/overview" },
  { label: "Transactions", href: "/transactions" },
  { label: "Budgets", href: "/budgets" },
  { label: "Accounts", href: "/accounts" },
];

export default function MainNavTabs() {
  const pathname = usePathname();

  return (
    <ul className="container flex select-none items-center gap-8 text-sm">
      {tabItems.map((item) => (
        <li key={item.label}>
          <Link
            href={item.href}
            className={
              pathname === item.href
                ? "font-medium text-primary"
                : "text-primary/80"
            }
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
