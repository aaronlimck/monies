"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabItems = [
  { label: "Overview", href: "/overview", comingSoon: true },
  { label: "Transactions", href: "/transactions" },
  { label: "Budgets", href: "/budgets", comingSoon: true },
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
            {item.comingSoon && (
              <span className="ml-1 text-nowrap rounded-full bg-secondary px-2.5 py-1 text-xs text-primary/50">
                Coming Soon
              </span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
