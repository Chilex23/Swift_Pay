import Image from "next/image";
import Link from "next/link";
import {
  PlusIcon,
  BanknotesIcon,
  PaperAirplaneIcon,
  LinkIcon,
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
      <h2 className="text-2xl font-semibold mt-[5rem] md:mt-0">
        Account Summary
      </h2>
      {/* At a glance header */}
      <div className="md:border-t-2 md:border-t-gray-300 mt-5 flex flex-col md:flex-row gap-y-10 justify-between py-5">
        {/* Glance 1 */}
        <div className="border-t-gray-300 md:border-r-gray-300 border-t-2 md:border-r-2 md:border-t-0 px-4 pt-4">
          <div className="flex gap-x-10 justify-between md:justify-normal">
            <div>
              <p className="font-medium">Account Balance</p>
              <p className="text-xl font-semibold">$10,032.67</p>
            </div>
            <Image
              src="/Line_Chart(Joe-Flores).png"
              width={150}
              height={150}
              alt="Line Chart"
            />
          </div>
          <p className="text-sm mt-2">
            1.5 BTC <span className="text-[#16A34A]">+12.78%</span> from 7D PNL
          </p>
        </div>
        {/* Glance 1 */}
        {/* Glance 2 */}
        <div className="border-t-gray-300 md:border-r-gray-300 border-t-2 md:border-r-2 md:border-t-0 px-4 pt-4">
          <div className="flex gap-x-10 justify-between md:justify-normal">
            <div>
              <p className="font-medium">Total Profit</p>
              <p className="text-xl font-semibold">$20,000.35</p>
            </div>
            <Image
              src="/Line_Chart(Joe-Flores).png"
              width={150}
              height={150}
              alt="Line Chart"
            />
          </div>
          <p className="text-sm mt-2">
            1.5 BTC <span className="text-[#16A34A]">+12.78%</span> from 7D PNL
          </p>
        </div>
        {/* Glance 2 */}
        {/* Glance 3 */}
        <div className="px-4 pt-4 border-t-gray-300 border-t-2 md:border-t-0">
          <div className="flex gap-x-10 justify-between md:justify-normal">
            <div>
              <p className="font-medium">Total Profit</p>
              <p className="text-xl font-semibold">$20,000.35</p>
            </div>
            <Image
              src="/Line_Chart(Joe-Flores).png"
              width={150}
              height={150}
              alt="Line Chart"
            />
          </div>
          <p className="text-smm mt-2">
            1.5 BTC <span className="text-[#16A34A]">+12.78%</span> from 7D PNL
          </p>
        </div>
        {/* Glance 3 */}
      </div>
      {/* At a glance header */}
      {/* Special Buttons */}
      <div className="py-2 flex my-10 lg:my-2 items-center justify-center gap-8">
        <Link
          href={"/deposit-funds"}
          className="flex flex-col gap-y-1 text-xs md:flex-row items-center gap-x-2 bg-violet-500 py-2 px-3 rounded-lg text-white md:text-sm hover:shadow-lg hover:scale-105 transition-all"
        >
          <p className="md:flex gap-1">
            Deposit <span className="hidden md:block">Funds</span>
          </p>
          <PlusIcon className="w-6" />
        </Link>
        <Link
          href={"/withdraw-funds"}
          className="flex flex-col gap-y-1 text-xs md:flex-row items-center gap-x-2 border-gray-200 border-2 py-2 px-3 rounded-lg text-black md:text-sm hover:shadow-lg hover:scale-105 transition-all"
        >
          <p className="md:flex gap-1">
            Withdraw <span className="hidden md:block">Funds</span>
          </p>
          <BanknotesIcon className="w-6" />
        </Link>
        <Link
          href={"/transfer-funds"}
          className="flex flex-col gap-y-1 text-xs md:flex-row items-center gap-x-2 border-gray-200 border-2 py-2 px-3 rounded-lg text-black md:text-sm hover:shadow-lg hover:scale-105 transition-all"
        >
          <p className="md:flex gap-1">
            Transfer <span className="hidden md:block">Funds</span>
          </p>
          <PaperAirplaneIcon className="w-6" />
        </Link>
      </div>
      {/* Special Buttons */}
      {/* Total Amount */}
      <div className="py-4 mt-6 flex flex-col gap-y-8 md:flex-row gap-x-12">
        {/* Total 1 */}
        <div className="flex items-center gap-x-3">
          <Image src="/profit.png" width={25} height={25} alt="Money" />
          <div className="ml-6 md:ml-0">
            <p className="text-sm">Total Deposit</p>
            <p>
              <span className="text-lg font-semibold">$100,000.35</span> = 3.5
              BTC
            </p>
          </div>
        </div>
        {/* Total 1 */}
        {/* Total 2 */}
        <div className="flex items-center gap-x-3">
          <Image src="/withdrawal.png" width={50} height={50} alt="Money" />
          <div>
            <p className="text-sm">Total Withdrawal</p>
            <p>
              <span className="text-lg font-semibold">$100,000.35</span> = 1.5
              BTC
            </p>
          </div>
        </div>
        {/* Total 2 */}
        {/* Total 3 */}
        <div className="flex items-center gap-x-3">
          <Image src="/bonus.png" width={50} height={50} alt="Money" />
          <div>
            <p className="text-sm">Bonus</p>
            <p>
              <span className="text-lg font-semibold">$100.35</span> = 0.05 BTC
            </p>
          </div>
        </div>
      </div>
      {/* Total Amount */}
      {/* Recent Transactions */}
      <div className="mt-14 flex justify-between">
        <h2 className="text-xl md:text-2xl font-semibold">
          Recent Transactions
        </h2>
        <button
          className="text-sm font-medium text-[#2563EB] underline
"
        >
          See All
        </button>
      </div>
      {/* Recent Transactions */}
      {/* Table for recent transactions */}
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
      <div className="my-5 md:hidden">
        <div className="flex justify-between mt-6 border-b pb-4 border-gray-100">
          <div className="h-[3rem]">
            <Image
              src="/deposit.svg"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
              alt="A man talking to a woman"
              className="rounded-full"
            />
          </div>
          <div className="text-[#4B5563] flex flex-col justify-between">
            <p className="font-medium text-sm">msQUNkj89s7ajXM9...</p>
            <p className="text-xs">Transfer . 12 Mar 2024</p>
          </div>
          <div className="text-[##111827] flex flex-col justify-between">
            <p className="text-xs">
              <span className="text-sm font-medium">$90 </span>= 0.05 BTC
            </p>
            <p className="text-xs text-[#FACC15] ml-auto w-fit flex items-center gap-1">
              <span className="h-2 w-2 bg-[#FACC15] block rounded-full">
                &nbsp;
              </span>{" "}
              Pending
            </p>
          </div>
        </div>

        <div className="flex justify-between mt-6 border-b pb-4 border-gray-100">
          <div className="h-[3rem]">
            <Image
              src="/Transfer.svg"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
              alt="A man talking to a woman"
              className="rounded-full"
            />
          </div>
          <div className="text-[#4B5563] flex flex-col justify-between">
            <p className="font-medium text-sm">msQUNkj89s7ajXM9...</p>
            <p className="text-xs">Deposit . 12 Mar 2024</p>
          </div>
          <div className="text-[##111827] flex flex-col justify-between">
            <p className="text-xs">
              <span className="text-sm font-medium">$90 </span>= 0.05 BTC
            </p>
            <p className="text-xs text-[#027A48] ml-auto w-fit flex items-center gap-1">
              <span className="h-2 w-2 bg-[#027A48] block rounded-full">
                &nbsp;
              </span>{" "}
              Successful
            </p>
          </div>
        </div>

        <div className="flex justify-between mt-6 border-b pb-4 border-gray-100">
          <div className="h-[3rem]">
            <Image
              src="/p2p.svg"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
              alt="A man talking to a woman"
              className="rounded-full"
            />
          </div>
          <div className="text-[#4B5563] flex flex-col justify-between">
            <p className="font-medium text-sm">Hurricane@whirl</p>
            <p className="text-xs">Deposit . 12 Mar 2024</p>
          </div>
          <div className="text-[##111827] flex flex-col justify-between">
            <p className="text-xs">
              <span className="text-sm font-medium">$90 </span>= 0.05 BTC
            </p>
            <p className="text-xs text-[#027A48] ml-auto w-fit flex items-center gap-1">
              <span className="h-2 w-2 bg-[#027A48] block rounded-full">
                &nbsp;
              </span>{" "}
              Successful
            </p>
          </div>
        </div>
      </div>
      {/* Table for recent transactions */}
      {/* Bottom Wrapper */}
      <div className="bg-[#111827] text-white mt-16 rounded-xl px-4 py-10 md:p-10 flex justify-between items-center md:gap-x-5">
        <div className="w-full md::w-2/4">
          <p className="text-3xl font-semibold">Refer a friend and earn $5</p>
          <p className="font-normal leading-6s text-gray-100 mt-4">
            Share your referral code and get $5 when your refer signs up and
            make transactions of over $500
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-10">
            <input
              name="referral_link"
              type="text"
              placeholder="Enter the referral link here"
              className="block rounded-md border border-gray-200 py-2 pl-4 h-12 text-sm outline-2 placeholder:text-[#4B5563]"
            />
            <button className="flex items-center justify-center gap-x-1 bg-[#6366F1] py-3 md:py-2 md:px-4 rounded-lg text-white hover:shadow-lg hover:scale-105 transition-all">
              <LinkIcon className="w-6" />
              <span>Copy Link</span>
            </button>
          </div>
        </div>
        <div className="hidden md:block">
          <Image
            src="/wallet.png"
            width={200}
            height={200}
            className=""
            alt="Wallet"
          />
        </div>
      </div>
      {/* Bottom Wrapper */}
    </>
  );
}
