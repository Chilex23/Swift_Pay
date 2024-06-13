"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import WithdrawFundsForm from "../ui/dashboard/withdrawFundsForm";

export default function Page() {
  const [step, setStep] = useState(1);
  return (
    <div className="pb-8 bg-gray-50 min-h-screen">
      {/* HEader */}
      <div className="px-10 py-4 border-b-2 border-gray-300 flex justify-between">
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
          <p className="font-medium text-sm">Withdraw Funds</p>
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
          <p className="font-medium text-sm">Confirm OTP</p>
        </div>
      </div>
      {/* STEPS */}
      {step === 1 ? (
        <WithdrawFundsForm setStepFunc={setStep} />
      ) : (
        <div className="bg-white px-6 py-10 mt-20 w-1/3 mx-auto rounded-2xl">
          <div className="mb-5">
            <p className="font-semibold text-center text-2xl">
              Enter OTP to proceed with transaction
            </p>
            <p className="font-normal text-[#4B5563] mt-2">
              Enter the code sent to your registered email address
            </p>
          </div>
          {/* Form */}
          <form>
            <div>
              <input
                name="bank"
                type="text"
                placeholder="Enter OTP code"
                className="w-full block rounded-md border border-gray-200 py-3 pl-2 outline-2 placeholder:text-[#4B5563]"
              />
            </div>
            <button className="btn mt-8 w-full text-white font-semibold bg-[#6366F1]">
              Confirm payment
            </button>
          </form>
          <div className="mt-5 border-t-[1px] border-gray-200">
            <button className="btn mt-6 w-full text-[#6D7280] font-semibold bg-[#E5E7EB]">
              Resend Code (0:59)
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
