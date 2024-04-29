import Image from "next/image";
import {
  EyeIcon,
  PlusIcon,
  BanknotesIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

export default function Page() {
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
      <h2 className="text-3xl font-semibold">My Account</h2>
      {/* Header */}
      {/* Account Banner */}
      <div className="bg-[#111827] rounded-md mt-10 text-white py-10 px-8 relative">
        <Image
          src="/Ellipse-1.png"
          width={10}
          height={10}
          className="absolute right-4"
        />
        <Image
          src="/Ellipse-2.png"
          width={70}
          height={70}
          className="absolute right-10 top-16"
        />
        <Image
          src="/Ellipse-3.png"
          width={20}
          height={20}
          className="absolute right-20 top-44"
        />
        <Image
          src="/Rectangle-1.png"
          width={20}
          height={20}
          className="absolute right-0 top-44"
        />
        <Image
          src="/Frame-1.png"
          width={200}
          height={200}
          className="absolute left-0 top-10"
        />
        <Image
          src="/Frame-2.png"
          width={200}
          height={200}
          className="absolute right-0 top-1"
        />
        <p className="flex items-center gap-x-3 text-lg font-semibold">
          Total Balance{" "}
          <span>
            <EyeIcon className="w-6" />
          </span>
        </p>
        {/* Account Balance */}
        <div className="mt-8 flex justify-center items-center gap-x-10">
          <div className="border-r-2 border-gray-300 pr-12">
            <p className="text-sm font-medium">Account USD Balance</p>
            <p className="text-3xl font-semibold">$10,000.35</p>
          </div>
          <div>
            <p className="text-sm font-medium">Equivalent BTC balance</p>
            <p className="text-3xl font-semibold flex items-center gap-x-3">
              10 BTC <span className="text-[#4ADE80] text-sm">+12.78%</span>{" "}
              <span className="text-sm font-medium">from 7D PNL</span>
            </p>
          </div>
        </div>
        {/* Account Balance */}
        {/* Special Buttons */}
        <div className="py-2 flex items-center justify-center gap-8 mt-8">
          <button className="flex items-center gap-x-2 bg-violet-500 py-2 px-3 rounded-lg text-white text-sm hover:shadow-lg hover:scale-105 transition-all">
            <span>Deposit Fund</span>
            <PlusIcon className="w-6" />
          </button>
          <button className="flex items-center gap-x-2 bg-white border-black border-2 py-2 px-3 rounded-lg text-black text-sm hover:shadow-lg hover:scale-105 transition-all">
            <span>Withdraw Funds</span>
            <BanknotesIcon className="w-6" />
          </button>
          <button className="flex items-center gap-x-2 bg-white border-black border-2 py-2 px-3 rounded-lg text-black text-sm hover:shadow-lg hover:scale-105 transition-all">
            <span>Transfer Funds</span>
            <PaperAirplaneIcon className="w-6" />
          </button>
        </div>
        {/* Special Buttons */}
      </div>
      {/* Account Banner */}
      {/* Recent Transactions */}
      <div className="mt-14 flex justify-between">
        <h2 className="text-2xl font-semibold">Recent Transactions</h2>
        <button
          className="text-sm text-[#2563EB] underline
"
        >
          See All Transactions
        </button>
      </div>
      {/* Recent Transactions */}
      {/* Table */}
      <table className="hidden min-w-full text-gray-900 md:table">
        <thead className="rounded-lg text-left text-sm font-normal">
          <tr>
            <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
              Date/Time
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Amount
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Type
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Description
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
            <td className="whitespace-nowrap py-3 pl-6 pr-3">
              <div className="flex items-center gap-3">
                <p>10 Feb 2024 20:46:21</p>
              </div>
            </td>
            <td className="whitespace-nowrap px-3 py-3">$100.35 = 1.5 BTC</td>
            <td className="whitespace-nowrap px-3 py-3">Deposit</td>
            <td className="whitespace-nowrap px-3 py-3">Greg69Xiwo23</td>
            <td className="whitespace-nowrap py-3 px-3">
              <button className="flex items-center gap-x-3 px-4 py-3 rounded-md text-[#CA8A04] bg-[#FEF9C3] font-medium text-xs">
                <span className="h-2 w-2 rounded-full bg-[#FACC15]"></span>
                Pending
              </button>
            </td>
          </tr>
          <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
            <td className="whitespace-nowrap py-3 pl-6 pr-3">
              <div className="flex items-center gap-3">
                <p>10 Feb 2024 20:46:21</p>
              </div>
            </td>
            <td className="whitespace-nowrap px-3 py-3">$100.35 = 1.5 BTC</td>
            <td className="whitespace-nowrap px-3 py-3">Deposit</td>
            <td className="whitespace-nowrap px-3 py-3">Greg69Xiwo23</td>
            <td className="whitespace-nowrap py-3 px-3">
              <button className="flex items-center gap-x-3 px-4 py-3 rounded-md text-[#CA8A04] bg-[#FEF9C3] font-medium text-xs">
                <span className="h-2 w-2 rounded-full bg-[#FACC15]"></span>
                Pending
              </button>
            </td>
          </tr>
          <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
            <td className="whitespace-nowrap py-3 pl-6 pr-3">
              <div className="flex items-center gap-3">
                <p>10 Feb 2024 20:46:21</p>
              </div>
            </td>
            <td className="whitespace-nowrap px-3 py-3">$100.35 = 1.5 BTC</td>
            <td className="whitespace-nowrap px-3 py-3">Transfer</td>
            <td className="whitespace-nowrap px-3 py-3">Greg69Xiwo23</td>
            <td className="whitespace-nowrap py-3 px-3">
              <button className="flex items-center gap-x-3 px-4 py-3 rounded-md text-[#027A48] bg-[#ECFDF3] font-medium text-xs">
                <span className="h-2 w-2 rounded-full bg-[#12B76A]"></span>
                Successful
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      {/* Table */}
    </>
  );
}
