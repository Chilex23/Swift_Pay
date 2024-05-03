"use client";
import Image from "next/image";
import { useState } from "react";
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
      <div className="flex items-center justify-between mb-12">
        <div>
          <p className="flex flex-col">
            <span className="text-xl font-semibold">Welcome, Ghost 👋</span>
            <span className="text-sm text-gray-800">
              Welcome to swiftearnprime, you set the level
            </span>
          </p>
        </div>
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
      </div>
      {/* Header for username */}
      {/* Header */}
      <h2 className="text-2xl font-semibold">Account Settings</h2>
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
          Withdrawal Accounts
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
