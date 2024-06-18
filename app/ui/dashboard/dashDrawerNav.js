"use client";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  HomeIcon,
  GiftIcon,
  WalletIcon,
  NewspaperIcon,
  ArrowTrendingUpIcon,
  Cog6ToothIcon,
  PhoneIcon,
  ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { NavBarContext } from "../navBar.provider";

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
    href: "/dashboard/profit-history",
    icon: ArrowTrendingUpIcon,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Cog6ToothIcon,
  },
];

const DashDrawerNav = () => {
  const pathname = usePathname();
  const { sideBarHidden, toggleSideBarHidden } = useContext(NavBarContext);
  return (
    <motion.div
      animate={{ x: sideBarHidden ? -2000 : 0 }}
      transition={{ duration: 0.5 }}
      className="fixed z-50 top-[4.5rem] w-full md:hidden overflow-scroll"
      initial={{ x: -2000 }}
    >
      <div className="bg-white border-red-500 text-[#111827] min-h-screen pb-10 pl-6 flex flex-col">
        {/* Header for username */}
        <Link
          href={"/dashboard/profile"}
          onClick={toggleSideBarHidden}
          className="my-4 border-[#E5E7EB] p-2 rounded-xl border-2 bg-white text-sm"
        >
          <div className="flex items-center gap-x-2">
            <Image
              src="/avatar.png"
              width={50}
              height={50}
              className="rounded-full bg-[#EB963F]"
              alt="Avatar profile"
            />
            <p className="text-sm font-medium flex flex-col">
              <span>John Doe</span>
              <span className="text-[#4B5563]">Profile Info</span>
            </p>
          </div>
        </Link>
        {/* Header for username */}
        <>
          {links.map((link, i) => {
            const LinkIcon = link.icon;
            return (
              <div className="mb-4" key={i}>
                <Link
                  href={link.href}
                  onClick={toggleSideBarHidden}
                  className="flex gap-4"
                >
                  <LinkIcon className="w-6" />
                  <span className="text-sm">{link.name}</span>
                </Link>
              </div>
            );
          })}
        </>
        <div className="flex flex-col gap-y-1 mt-4">
          <button
            onClick={toggleSideBarHidden}
            className="flex mb-2 w-full grow items-center gap-4 rounded-md text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <PhoneIcon className="w-6" />
            <div className="block">Support</div>
          </button>

          <Link
            onClick={toggleSideBarHidden}
            href={"/dashboard/referral"}
            className="mb-2"
          >
            <button className="flex w-full grow items-center gap-4 rounded-md text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3">
              <GiftIcon className="w-6" />
              <div className="block">Referral</div>
            </button>
          </Link>

          <Link
            onClick={toggleSideBarHidden}
            href={"/login"}
            className="flex flex-row gap-4"
          >
            <ArrowLeftStartOnRectangleIcon
              color="#D9363E"
              className="w-6 font-bold p-0"
            />
            <p className="p-0 text-sm font-medium text-[#D9363E]">Log Out</p>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default DashDrawerNav;
