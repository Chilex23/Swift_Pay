import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <div className="h-screen bg-[#F9FAFB]">
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
        <Link
          href={"/dashboard"}
          className="border-2 border-[#D2D5DA] px-2 py-1 rounded-md font-medium"
        >
          Cancel
        </Link>
      </div>
      {/* HEader */}
      <div className="flex flex-col md:flex-row gap-10 justify-center mt-16">
        <div className="p-6 bg-white rounded-xl md:w-[28rem]">
          {/* Banner */}
          <div className="flex justify-between py-6 px-3 gap-4 bg-[#11141A] rounded-xl text-white">
            <div className="flex items-center gap-2">
              <Image src="/bronze-trophy.png" width={25} height={25} />
              <p className="text-base font-medium">Bronze Package</p>
            </div>
            <p className="text-2xl font-semibold">$9,000</p>
          </div>
          {/* Banner */}
          <div className="my-10 flex flex-col gap-y-4">
            <div className="flex justify-between">
              <p>Maximum investment</p> <p className="text-[#1F2937]">$9,999</p>
            </div>
            <div className="flex justify-between">
              <p>Minimum investment</p> <p className="text-[#1F2937]">$3,000</p>
            </div>
            <div className="flex justify-between">
              <p>Return</p> <p className="text-[#1F2937]">325%</p>
            </div>
            <div className="flex justify-between">
              <p>Duration</p> <p className="text-[#1F2937]">7 days</p>
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <p className="font-medium text-[#1F2937]">Amount to Invest</p>{" "}
              <p className="text-[#1F2937] font-semibold">=$5,000</p>
            </div>
          </div>
        </div>

        <div className="px-6 py-3 w-fit">
          <div className="w-full border-2 border-[#E5E7EB] mt-6 flex justify-between items-center h-12 px-4 py-7 rounded-xl text-sm mb-5 bg-[#F3F4F6]">
            <p>Available Balance</p>
            <p>
              <span className="text-lg font-semibold">$1000</span> = 0.5 BTC
            </p>
          </div>
          <h2 className="text-2xl font-semibold">
            Get Started with your investment
          </h2>
          <p className="text-[#667085] text-sm">
            Choose the right plan for your budget
          </p>
          {/* Form */}
          <form className="mt-5">
            <div>
              <label id="bank" className="text-sm font-medium">
                Select Package
              </label>
              <select className="select select-bordered w-full">
                <option disabled selected>
                  Select Package
                </option>
                <option>Bronze Package</option>
                <option>Silver Package</option>
                <option>Gold Package</option>
                <option>Diamond Package</option>
              </select>
            </div>
            <div className="mt-4">
              <label id="account-number" className="text-sm font-medium">
                Amount
              </label>
              <input
                name="account-number"
                type="text"
                placeholder="Enter Amount"
                className="w-full block rounded-md border border-gray-200 py-3 pl-2 outline-2 placeholder:text-[#4B5563]"
              />
            </div>
            <button className="btn mt-8 w-full text-white font-semibold bg-[#6366F1]">
              Make Payment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
