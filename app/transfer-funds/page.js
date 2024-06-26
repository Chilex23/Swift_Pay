import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* HEader */}
      <div className="px-10 py-4 border-b-2 border-gray-300 flex justify-between bg-white">
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
        <Link href={"/dashboard"} className="border-2 border-[#D2D5DA] px-2 py-1 rounded-md font-medium">
          Cancel
        </Link>
      </div>
      {/* HEader */}
      <div className="lg:w-1/3 px-6 py-3 mx-auto mt-20">
        <h2 className="text-2xl font-semibold text-center">
          Send Funds to a swiftie
        </h2>
        <p className="text-[#667085] text-sm text-center">
          Enter required recipients information
        </p>
        <div className="w-full border-2 border-[#E5E7EB] mt-6 flex justify-between items-center h-12 px-4 py-3 rounded-md text-sm bg-[#E5E7EB] mb-5">
          <p>Available Balance</p>
          <p>
            <span className="text-lg font-semibold">$1000</span> = 0.5 BTC
          </p>
        </div>
        {/* Form */}
        <form>
          <div>
            <label id="bank" className="text-sm font-medium">
              Recipient Email or User name
            </label>
            <input
              name="bank"
              type="text"
              placeholder="Enter email address/username"
              className="w-full block rounded-md border border-gray-200 py-2 pl-2 outline-2 placeholder:text-[#4B5563]"
            />
          </div>
          <div className="mt-2">
            <label id="account-number" className="text-sm font-medium">
              Amount
            </label>
            <input
              name="account-number"
              type="text"
              placeholder="Enter Amount"
              className="w-full block rounded-md border border-gray-200 py-2 pl-2 outline-2 placeholder:text-[#4B5563]"
            />
          </div>
          <p className="flex justify-between mt-2">
            <span>Transfer fees(0%)</span>
            <span className="font-medium">$0</span>
          </p>
          <button className="btn mt-8 w-full text-white font-semibold bg-[#6366F1]">
            Proceed
          </button>
        </form>
      </div>
    </div>
  );
}
