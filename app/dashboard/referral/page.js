import Image from "next/image";
import Link from "next/link";
import {
  ChevronDownIcon,
  UserIcon,
  BriefcaseIcon,
  LinkIcon,
  PhoneIcon,
  ArrowLeftStartOnRectangleIcon,
  WalletIcon,
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
                <Link href={"/dashboard/profile"} className="p-0 bg-white">
                  <UserIcon className="w-6 font-bold p-0" />
                  <p className="hidden md:block p-0">Profile Icon</p>
                </Link>
              </li>
              <li className="flex flex-row gap-3 px-2 mt-3">
                <Link href={"/dashboard/trading-plan"} className="p-0 bg-white">
                  <BriefcaseIcon className="w-6 font-bold p-0" />
                  <p className="hidden md:block p-0">Trading Plan</p>
                </Link>
              </li>
              <li className="flex flex-row gap-3 px-2 mt-3">
                <PhoneIcon className="w-6 font-bold p-0" />
                <p className="hidden md:block p-0">Contact Suppport</p>
              </li>
              <li className="flex flex-row gap-4 px-3 mt-3">
                <Image
                  src="/gold-trophy.png"
                  width={14}
                  height={14}
                  className="p-0"
                />
                <p className="hidden md:block p-0">My Plan</p>
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
      <h2 className="text-3xl font-semibold">Referrals</h2>
      {/* Header */}
      {/* Referral Wrapper */}
      <div className="bg-[#111827] text-white mt-10 rounded-xl p-10 flex justify-between items-center gap-x-5">
        <div className="w-2/4">
          <p className="text-3xl font-semibold">Refer a friend and earn $5</p>
          <p className="font-normal leading-6s text-gray-100 mt-4">
            Share your referral code and get $5 when your refer signs up and
            make transactions of over $500
          </p>
          <div className="flex gap-x-4 mt-10">
            <input
              name="referral_link"
              type="text"
              placeholder="Enter the referral link here"
              className="block rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-[#4B5563]"
            />
            <button className="flex items-center gap-x-1 bg-[#6366F1] py-2 px-4 rounded-lg text-white hover:shadow-lg hover:scale-105 transition-all">
              <LinkIcon className="w-6" />
              <span>Copy Link</span>
            </button>
          </div>
        </div>
        <div>
          <Image
            src="/wallet.png"
            width={200}
            height={200}
            className=""
            alt="Wallet"
          />
        </div>
      </div>
      {/* Referral Wrapper */}
      {/* Info Card */}
      <div className="mt-6 flex gap-10">
        <div className="flex items-center gap-5">
          <p className="font-medium flex items-center gap-3">
            Number of referrals{" "}
            <span className="text-2xl font-semibold">4</span>
          </p>
          <div className="p-3 bg-[#EEF2FF] rounded-full">
            <UserIcon className="w-6" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p className="font-medium">Total Earnings</p>
          <p className="flex items-center gap-3 text-sm">
            <span className="text-2xl font-semibold">$100,000.35</span> = 1.5
            BTC
          </p>
          <div className="p-3 bg-[#EEF2FF] rounded-full">
            <WalletIcon className="w-6" />
          </div>
        </div>
      </div>
      {/* Info Card */}
      {/* Table */}
      <table className="hidden min-w-full text-gray-900 md:table mt-10">
        <thead className="rounded-lg text-left text-sm font-normal bg-[#F9FAFB]">
          <tr>
            <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
              Full Name
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Amount Earned
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Registration Date
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg text-[#4B5563]">
            <td className="whitespace-nowrap py-3 pl-6 pr-3">
              <div className="flex items-center gap-3">
                <p>John Doe</p>
              </div>
            </td>
            <td className="whitespace-nowrap px-3 py-3">$100.35 = 1.5 BTC</td>
            <td className="whitespace-nowrap px-3 py-3">10 Apr 2024</td>
          </tr>
          <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg text-[#4B5563]">
            <td className="whitespace-nowrap py-3 pl-6 pr-3">
              <div className="flex items-center gap-3">
                <p>John Doe</p>
              </div>
            </td>
            <td className="whitespace-nowrap px-3 py-3">$100.35 = 1.5 BTC</td>
            <td className="whitespace-nowrap px-3 py-3">10 Apr 2024</td>
          </tr>
          <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg text-[#4B5563]">
            <td className="whitespace-nowrap py-3 pl-6 pr-3">
              <div className="flex items-center gap-3">
                <p>John Doe</p>
              </div>
            </td>
            <td className="whitespace-nowrap px-3 py-3">$100.35 = 1.5 BTC</td>
            <td className="whitespace-nowrap px-3 py-3">10 Apr 2024</td>
          </tr>
          <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg text-[#4B5563]">
            <td className="whitespace-nowrap py-3 pl-6 pr-3">
              <div className="flex items-center gap-3">
                <p>John Doe</p>
              </div>
            </td>
            <td className="whitespace-nowrap px-3 py-3">$100.35 = 1.5 BTC</td>
            <td className="whitespace-nowrap px-3 py-3">10 Apr 2024</td>
          </tr>
        </tbody>
      </table>
      {/* Table */}
    </>
  );
}
