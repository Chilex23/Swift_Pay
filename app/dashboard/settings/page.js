"use client";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const [accountDetails, setAccountDetails] = useState("Bank Account");
  //   const setModalToShow = (type) => {
  //     setAccountDetails(type);
  //     document.getElementById("my_modal_5").showModal();
  //   };
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
        <a role="tab" className="tab bg-white text-black">
          Withdrawal Accounts
        </a>
        <a role="tab" className="tab text-[#4B5563]">
          Security
        </a>
        <a role="tab" className="tab text-[#4B5563]">
          Notifications
        </a>
      </div>
      {/* Tabs */}
      {/* Add withdrawal accounts */}
      <>
        <div className="flex gap-x-2 items-center">
          <Image src="/bank-notes.png" width={35} height={35} />
          <span className="text-lg font-semibold">Add Payout account</span>
        </div>
      </>

      <div className="my-8 w-2/3 flex flex-col gap-y-8">
        <div className="flex justify-between">
          <div className="flex gap-x-3 items-center">
            <Image src="/Cryptocurrency.png" width={35} height={35} />
            <span className="font-medium">Bank</span>
          </div>
          <button
            onClick={() => {
              setAccountDetails("Bank Account");
              document.getElementById("my_modal_5").showModal();
            }}
            className="text-[#2563EB] font-medium"
          >
            Add
          </button>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-x-3 items-center">
            <Image src="/bitcoin-icon.png" width={35} height={35} />
            <span className="font-medium">Bitcoin</span>
          </div>
          <button
            onClick={() => {
              setAccountDetails("Bitcoin Address");
              document.getElementById("my_modal_5").showModal();
            }}
            className="text-[#2563EB] font-medium"
          >
            Add
          </button>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-x-3 items-center">
            <Image src="/Etherum.png" width={35} height={35} />
            <span className="font-medium">Etherum</span>
          </div>
          <button className="text-[#2563EB] font-medium">Add</button>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-x-3 items-center">
            <Image src="/Litecoin.png" width={35} height={35} />
            <span className="font-medium">Litecoin</span>
          </div>
          <button className="text-[#2563EB] font-medium">Add</button>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-x-3 items-center">
            <Image src="/usdt.png" width={35} height={35} />
            <span className="font-medium">USDT.TRC20</span>
          </div>
          <button className="text-[#2563EB] font-medium">Add</button>
        </div>
      </div>
      {/* Add withdrawal accounts */}
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box py-10">
          <h3 className="font-bold text-2xl">Add {accountDetails}</h3>
          {accountDetails !== "Bank Account" ? (
            <>
              <p className="py-4 text-sm font-medium">Bitcoin Address</p>
              <div className="modal-action block mt-2">
                <form method="dialog">
                  <input
                    name="referral_link"
                    type="text"
                    placeholder="Enter Bitcoin Address"
                    className="w-full block rounded-md border border-gray-200 py-2 pl-4 outline-2 placeholder:text-[#4B5563]"
                  />
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn mt-4 w-full text-white font-semibold bg-[#6366F1]">
                    Save Address
                  </button>
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
              </div>
            </>
          ) : (
            <div className="modal-action block mt-2">
              <form method="dialog">
                <div>
                  <label id="bank" className="text-sm font-medium">
                    Bank
                  </label>
                  <input
                    name="bank"
                    type="text"
                    placeholder="Select Bank"
                    className="w-full block rounded-md border border-gray-200 py-2 pl-2 outline-2 placeholder:text-[#4B5563]"
                  />
                </div>
                <div className="mt-2">
                  <label id="account-number" className="text-sm font-medium">
                    Account Number
                  </label>
                  <input
                    name="account-number"
                    type="text"
                    placeholder="Enter bank account number"
                    className="w-full block rounded-md border border-gray-200 py-2 pl-2 outline-2 placeholder:text-[#4B5563]"
                  />
                </div>
                <div className="mt-2">
                  <label id="account-name" className="text-sm font-medium">
                    Account Name
                  </label>
                  <input
                    name="account-name"
                    type="text"
                    placeholder="Enter bank account name"
                    className="w-full block rounded-md border border-gray-200 py-2 pl-2 outline-2 placeholder:text-[#4B5563]"
                  />
                </div>
                <div className="mt-2">
                  <label id="swift-code" className="text-sm font-medium">
                    Swift Code
                  </label>
                  <input
                    name="swift-code"
                    type="text"
                    placeholder="Enter Swift Code"
                    className="w-full block rounded-md border border-gray-200 py-2 pl-2 outline-2 placeholder:text-[#4B5563]"
                  />
                </div>

                {/* if there is a button in form, it will close the modal */}
                <button className="btn mt-4 w-full text-white font-semibold bg-[#6366F1]">
                  Save Account
                </button>
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
            </div>
          )}
        </div>
      </dialog>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
    </>
  );
}
