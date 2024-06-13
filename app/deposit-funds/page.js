"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DepositFundsForm from "../ui/dashboard/depositFundsForm";
import clsx from "clsx";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function Page() {
  const [step, setStep] = useState(1);
  return (
    <div className="h-screen bg-gray-50">
      {/* HEader */}
      <div className="px-10 py-4 border-b-2 bg-white border-gray-300 flex justify-between">
        <Link href={"/dashboard"} className="flex gap-x-4 text-black md:w-40">
          <ArrowLeftIcon className="w-6" />
          <div className="flex items-center gap-x-2">
            <Image
              src="/Vector.png"
              width={20}
              height={20}
              className=""
              alt="Swift Pay Logo"
            />
            <p className="text-2xl font-bold">Swift</p>
          </div>
        </Link>
        <Link
          href={"/dashboard"}
          className="border-2 border-[#D2D5DA] px-2 py-1 rounded-md font-medium"
        >
          Cancel
        </Link>
      </div>
      {/* HEader */}
      {/* STEPS */}
      <div className="mt-6 flex gap-10 w-fit mx-auto">
        <div className="flex gap-2 items-center">
          <div
            className={clsx(
              "h-10 w-10 flex items-center justify-center border-[#6366F1] border-2 rounded-full",
              {
                "bg-[#6366F1] text-white": step === 1,
              }
            )}
          >
            <p className="font-medium text-sm">1</p>
          </div>
          <p className="font-medium text-sm">Deposit Funds</p>
        </div>

        <div className="flex gap-2 items-center">
          <div
            className={clsx(
              "h-10 w-10 flex items-center justify-center border-[#6366F1] border-2 rounded-full",
              {
                "bg-[#6366F1] text-white": step === 2,
              }
            )}
          >
            <p className="font-medium text-sm">2</p>
          </div>
          <p className="font-medium text-sm">Proof of Payment</p>
        </div>
      </div>
      {/* STEPS */}
      {step === 1 ? (
        <DepositFundsForm setStepFunc={setStep} />
      ) : (
        <div className="px-6 py-10 mt-5 w-fit mx-auto rounded-2xl">
          <div className="mb-5">
            <p className="font-semibold text-center text-2xl">
              Confirm Payment
            </p>
            <p className="font-normal text-[#4B5563] text-center mt-2">
              Send and upload proof of payment
            </p>
          </div>
          {/* Form */}
          <div className="bg-white rounded-2xl px-4 py-10">
            <div>
              <div className="flex gap-4 items-center">
                <Image src="/Etherum.png" width={35} height={35} />
                <p className="font-medium text-sm">Solana Payment Method</p>
              </div>

              <div className="mt-5">
                <label id="bank" className="text-sm font-medium">
                  Solana Address
                </label>
                <div className="flex gap-4">
                  <p className="w-full block rounded-md border border-dashed border-gray-200 py-3 px-2 outline-2">
                    3ijNSWC1bWX7dT2cWHrk5ywFPSRRDTgRgEunLRLkSn8w
                  </p>
                  <div>
                    <p className="text-sm font-medium text-[#6366F1]">
                      Copy Link
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <label className="text-sm font-medium">
                  Upload Proof of Payment{" "}
                  <span className="text-gray-500">(payment receipt)</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter bitcoin payment address"
                  className="w-full block rounded-md border border-gray-200 py-3 pl-2 outline-2 placeholder:text-[#4B5563]"
                />
              </div>

              <button className="btn mt-8 w-4/5 mx-auto block text-white font-semibold bg-[#6366F1]">
                Submit
              </button>
            </div>
          </div>
          {/* Form */}
        </div>
      )}
    </div>
  );
}
