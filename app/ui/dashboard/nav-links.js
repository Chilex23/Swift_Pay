"use client";

import {
  HomeIcon,
  WalletIcon,
  NewspaperIcon,
  ArrowTrendingUpIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Map of links to display in the side navigation.
const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Account",
    href: "/dashboard/account",
    icon: WalletIcon,
  },
  {
    name: "Transactions",
    href: "/dashboard/transactions",
    icon: NewspaperIcon,
  },
  {
    name: "Profit History",
    href: "/dashboard/profit_history",
    icon: ArrowTrendingUpIcon,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Cog6ToothIcon,
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-blue-700": pathname === link.href,
              }
            )}
          >
            {pathname === link.href ? (
              <LinkIcon className="w-6" fill="blue" />
            ) : (
              <LinkIcon className="w-6" />
            )}
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
