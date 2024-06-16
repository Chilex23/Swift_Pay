"use client";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDownIcon,
  UserIcon,
  BriefcaseIcon,
  PhoneIcon,
  ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/24/outline";

export default function Page() {
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
      <h1 className="text-2xl font-semibold mt-[5rem] md:mt-0">Profile Info</h1>
      {/* Title */}
      <div className="flex gap-3 mt-6">
        <div className="avatar placeholder">
          <div className="bg-[#1677FF] text-neutral-content rounded-full w-12">
            <span className="text-base font-medium">UI</span>
          </div>
        </div>
        <div>
          <p className="text-lg font-medium">Ghost Doe</p>
          <p className="text-sm text-[#6D7280]">Phantom87@gmail.com</p>
        </div>
        <div
          className="ml-8 my-auto cursor-pointer"
          onClick={() => {
            document.getElementById("my_modal_5").showModal();
          }}
        >
          <p className="font-medium text-[#2563EB]">Edit</p>
        </div>
      </div>
      {/* Title */}
      {/* Box */}
      <div className="border-2 border-[#E5E7EB] bg-[#F9FAFB] rounded-xl mt-6 p-6">
        <div className="grid md:grid-cols-2 gap-5 md:gap-12">
          <div className="flex md:flex-col items-center md:items-start justify-between">
            <p className="text-sm text-[#6D7280]">Full Name</p>
            <p className="font-medium text-[#2F313F]">Ghost Doe</p>
          </div>
          <div className="flex md:flex-col items-center md:items-start justify-between">
            <p className="text-sm text-[#6D7280]">Email Address</p>
            <p className="font-medium text-[#2F313F]">Phantom87@gmail.com</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-5 md:gap-12 mt-5 md:mt-6">
          <div className="flex md:flex-col items-center md:items-start justify-between">
            <p className="text-sm text-[#6D7280]">UserName</p>
            <p className="font-medium text-[#2F313F]">Dosghost69</p>
          </div>
          <div className="flex md:flex-col items-center md:items-start justify-between">
            <p className="text-sm text-[#6D7280]">Phone Number</p>
            <p className="font-medium text-[#2F313F]">09033748534</p>
          </div>
        </div>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box py-10">
          <h3 className="font-bold text-2xl">Update Profile</h3>
          <div className="modal-action block mt-4">
            <form method="dialog">
              <div>
                <label id="bank" className="text-sm font-medium">
                  Full Name
                </label>
                <input
                  name="bank"
                  type="text"
                  placeholder="Phantom Druid"
                  className="w-full block rounded-md border border-gray-200 py-3 pl-2 outline-2 placeholder:text-[#4B5563]"
                />
              </div>
              <div className="mt-2">
                <label id="account-number" className="text-sm font-medium">
                  Email Address
                </label>
                <input
                  name="account-number"
                  type="text"
                  placeholder="Phantom@gmail.com"
                  className="w-full block rounded-md border border-gray-200 py-3 pl-2 outline-2 placeholder:text-[#4B5563]"
                />
              </div>
              <div className="mt-2">
                <label id="user-name" className="text-sm font-medium">
                 UserName
                </label>
                <input
                  name="user-name"
                  type="text"
                  placeholder="Druid45"
                  className="w-full block rounded-md border border-gray-200 py-3 pl-2 outline-2 placeholder:text-[#4B5563]"
                />
              </div>
              <div className="mt-2">
                <label id="swift-code" className="text-sm font-medium">
                  Phone Number
                </label>
                <input
                  name="swift-code"
                  type="text"
                  placeholder="0746-383-3883"
                  className="w-full block rounded-md border border-gray-200 py-3 pl-2 outline-2 placeholder:text-[#4B5563]"
                />
              </div>

              {/* if there is a button in form, it will close the modal */}
              <button className="btn mt-4 w-full text-white font-semibold bg-[#6366F1]">
                Save Changes
              </button>
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
          </div>
        </div>
      </dialog>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
    </>
  );
}
