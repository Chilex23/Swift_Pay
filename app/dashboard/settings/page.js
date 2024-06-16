"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import {
  ChevronDownIcon,
  UserIcon,
  BriefcaseIcon,
  PhoneIcon,
  ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/24/outline";
import AddAccount from "@/app/ui/dashboard/settings/add-accout";
import Security from "@/app/ui/dashboard/settings/security";
import Notifications from "@/app/ui/dashboard/settings/notifications";
import clsx from "clsx";

export default function Page() {
  const [accountDetails, setAccountDetails] = useState("Bank Account");
  const [tab, setTab] = useState("withdrawal");
  console.log(tab);
  return (
    <>
      {/* Header for username */}
      <div className="hidden md:flex items-center justify-between mt-[5rem] md:mt-1 mb-12">
        <div>
          <p className="flex flex-col">
            <span className="text-xl font-semibold">Welcome, Ghost 👋</span>
            <span className="text-sm text-gray-800">
              Welcome to swiftearnprime, you set the level
            </span>
          </p>
        </div>
        <div>
          <details className="dropdown">
            <summary className="m-1 btn border-none border-2 bg-white text-sm">
              <div className="flex items-center gap-x-2">
                <Image
                  src="/avatar.png"
                  width={50}
                  height={50}
                  className="rounded-full bg-[#EB963F]"
                  alt="Avatar profile"
                />
                <p className="text-sm font-medium">
                  <span>John Doe</span>
                </p>
              </div>
              <ChevronDownIcon className="w-4 font-bold" />
            </summary>
            <ul className="py-2 px-0 mt-1 shadow-2xl menu dropdown-content z-[1] bg-base-100 rounded-box w-max right-0">
              <li className="flex flex-row pb-2 px-2 border-b border-gray-200">
                <Image
                  src="/avatar.png"
                  width={50}
                  height={50}
                  className="rounded-full bg-[#EB963F]"
                  alt="Avatar"
                />
                <p className="font-medium">John Doe</p>
                <div className="bg-[#FEF9C3] flex justify-center items-center p-1 rounded-2xl">
                  <Image src="/gold-trophy.png" width={14} height={14} />
                  <span className="text-xs font-medium">Gold Package</span>
                </div>
              </li>
              <li className="flex flex-row gap-3 px-2 mt-3">
                <Link href={"/dashboard/profile"} className="p-3 pl-1 bg-white">
                  <UserIcon className="w-6 font-bold p-0" />
                  <p className="hidden md:block p-0">Profile Icon</p>
                </Link>
              </li>
              <li className="flex flex-row gap-3 px-2 mt-3">
                <Link
                  href={"/dashboard/trading-plan"}
                  className="p-3 pl-1 bg-white"
                >
                  <BriefcaseIcon className="w-6 font-bold p-0" />
                  <p className="hidden md:block p-0">Trading Plan</p>
                </Link>
              </li>
              <li className="flex flex-row gap-3 p-3 mt-3">
                <PhoneIcon className="w-6 font-bold p-0" />
                <p className="hidden md:block p-0">Contact Suppport</p>
              </li>
              <li className="flex flex-row gap-4 px-3 mt-3">
                <Link href={"/dashboard/my-plan"} className="p-3 pl-1 bg-white">
                  <Image
                    src="/gold-trophy.png"
                    width={14}
                    height={14}
                    className="p-0"
                  />
                  <p className="hidden md:block p-0">My Plan</p>
                </Link>
              </li>
              <li className="flex flex-row gap-3 px-2 py-3 mt-3 border-t border-gray-200">
                <ArrowLeftStartOnRectangleIcon
                  color="#D9363E"
                  className="w-6 font-bold p-0"
                />
                <p className="hidden md:block p-0 font-medium text-[#D9363E]">
                  Log Out
                </p>
              </li>
            </ul>
          </details>
        </div>
      </div>
      {/* Header for username */}
      {/* Header */}
      <h2 className="text-2xl font-semibold mt-[5rem] md:mt-0">Account Settings</h2>
      {/* Header */}
      {/* Tabs */}
      <div role="tablist" className="tabs tabs-boxed my-8 w-fit font-semibold">
        <a
          role="tab"
          className={clsx("tab", {
            "bg-white": tab === "withdrawal",
            "text-black": tab === "withdrawal",
            "text-[#4B5563]": tab !== "withdrawal",
          })}
          onClick={() => {
            setTab("withdrawal");
          }}
        >
          Withdrawal
        </a>
        <a
          role="tab"
          className={clsx("tab", {
            "bg-white": tab === "security",
            "text-black": tab === "security",
            "text-[#4B5563]": tab !== "security",
          })}
          onClick={() => {
            setTab("security");
          }}
        >
          Security
        </a>
        <a
          role="tab"
          className={clsx("tab", {
            "bg-white": tab === "notifications",
            "text-black": tab === "notifications",
            "text-[#4B5563]": tab !== "notifications",
          })}
          onClick={() => {
            setTab("notifications");
          }}
        >
          Notifications
        </a>
      </div>
      {/* Tabs */}
      {tab !== "withdrawal" ? (
        tab === "security" ? (
          <Security />
        ) : (
          <Notifications />
        )
      ) : (
        <AddAccount
          setAccountDetails={setAccountDetails}
          accountDetails={accountDetails}
        />
      )}
    </>
  );
}
