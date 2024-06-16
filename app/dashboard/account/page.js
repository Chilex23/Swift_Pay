import Image from "next/image";
import Link from "next/link";
import {
  PlusIcon,
  EyeIcon,
  BanknotesIcon,
  PaperAirplaneIcon,
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
      {/* Header */}
      <h2 className="text-2xl md:text-3xl font-semibold mt-[5rem] md:mt-0">My Account</h2>
      {/* Header */}
      {/* Account Banner */}
      <div className="bg-[#111827] h-[16rem] md:h-auto rounded-md mt-10 text-white py-10 px-8 relative">
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
        <div className="mt-8 flex md:justify-center items-center relative z-30 gap-x-10">
          <div className="border-r-2 border-gray-300 pr-12">
            <p className="text-sm font-medium">Account USD Balance</p>
            <p className="text-3xl font-semibold">$10,000.35</p>
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-medium">Equivalent BTC balance</p>
            <p className="text-3xl font-semibold flex items-center gap-x-3">
              10 BTC <span className="text-[#4ADE80] text-sm">+12.78%</span>{" "}
              <span className="text-sm font-medium">from 7D PNL</span>
            </p>
          </div>
        </div>
        {/* Account Balance */}
        {/* Special Buttons */}
        <div className="py-2 hidden md:flex items-center justify-center gap-8 mt-8">
          <Link
            href={"/deposit-funds"}
            className="flex flex-col gap-y-1 text-xs md:flex-row items-center gap-x-2 bg-violet-500 py-2 px-3 rounded-lg text-white md:text-sm hover:shadow-lg hover:scale-105 transition-all"
          >
            <span>Deposit Fund</span>
            <PlusIcon className="w-6" />
          </Link>
          <Link
            href={"/withdraw-funds"}
            className="flex flex-col gap-y-1 text-xs md:flex-row items-center gap-x-2 border-gray-200 border-2 py-2 px-3 rounded-lg text-black bg-white md:text-sm hover:shadow-lg hover:scale-105 transition-all"
          >
            <span>Withdraw Funds</span>
            <BanknotesIcon className="w-6" />
          </Link>
          <Link
            href={"/transfer-funds"}
            className="flex flex-col gap-y-1 text-xs md:flex-row items-center gap-x-2 border-gray-200 border-2 py-2 px-3 rounded-lg text-black bg-white md:text-sm hover:shadow-lg hover:scale-105 transition-all"
          >
            <span>Transfer Funds</span>
            <PaperAirplaneIcon className="w-6" />
          </Link>
        </div>
        {/* Special Buttons */}
      </div>
      {/* Account Banner */}
      {/* Recent Transactions */}
      <div className="mt-14 flex justify-between">
        <h2 className="text-xl md:text-2xl font-semibold">
          Recent Transactions
        </h2>
        <button
          className="text-sm font-medium text-[#2563EB] underline
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
