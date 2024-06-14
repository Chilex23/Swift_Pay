import Image from "next/image";
import Link from "next/link";
import {
  ChevronDownIcon,
  UserIcon,
  BriefcaseIcon,
  LinkIcon,
  PhoneIcon,
  ArrowLeftStartOnRectangleIcon,
  CheckIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <div>
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
                <Link href={"/dashboard/profile"} className="p-3 pl-1 bg-white">
                  <UserIcon className="w-6 font-bold p-0" />
                  <p className="hidden md:block p-0">Profile Icon</p>
                </Link>
              </li>
              <li className="flex flex-row gap-3 px-2 mt-3">
                <Link href={"/dashboard/trading-plan"} className="p-3 pl-1 bg-white">
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
      <h2 className="text-3xl font-semibold">Trading Plans</h2>
      <p className="text-[#4B5563] text-sm">Get started with your investment</p>
      {/* Header */}
      {/* Cards */}
      <div className="mt-10 grid grid-cols-3 gap-y-10">
        <div className="p-6 w-[20rem] bg-[#F3F4F6] rounded-xl">
          <div className="flex gap-4">
            <p className="text-[#374151]">Bronze Package</p>
            <Image src="/gold-trophy.png" width={14} height={14} />
          </div>
          <p className="font-semibold text-2xl mt-2 text-[#101828]">$9,999</p>
          <p className="text-sm text-[#374151] my-3">
            Plan duration is{" "}
            <span className="font-semibold text-[#101828]">7 days</span> and
            guarantees return of{" "}
            <span className="font-semibold text-[#101828]">325%</span>
          </p>
          <Link href={"/buy-package"}>
            <button className="btn mt-4 w-full text-white font-semibold bg-[#6366F1]">
              Get Started
            </button>
          </Link>
          {/* Checks */}
          <div className="my-6 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <CheckIcon className="w-6" />
              <p>20+ assets/products</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckIcon className="w-6" />
              <p>24/7 Support</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckIcon className="w-6" />
              <p>Risk Management</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckIcon className="w-6" />
              <p>Free Signal</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckIcon className="w-6" />
              <p>Unlimited Support</p>
            </div>
          </div>
          {/* Checks */}
          <div className="flex flex-col gap-4">
            <p className="text-sm flex gap-4">
              <span>Min. deposit:</span>{" "}
              <span className="font-semibold">$3,000</span>
            </p>
            <p className="text-sm flex gap-4">
              <span>Max. deposit:</span>{" "}
              <span className="font-semibold">$9,999</span>
            </p>
          </div>
        </div>
        <div className="p-6 w-[20rem] bg-[#F3F4F6] rounded-xl">
          <div className="flex gap-4">
            <p className="text-[#374151]">Silver Package</p>
            <Image src="/gold-trophy.png" width={14} height={14} />
          </div>
          <p className="font-semibold text-2xl mt-2 text-[#101828]">$9,999</p>
          <p className="text-sm text-[#374151] my-3">
            Plan duration is{" "}
            <span className="font-semibold text-[#101828]">7 days</span> and
            guarantees return of{" "}
            <span className="font-semibold text-[#101828]">325%</span>
          </p>
          <button className="btn mt-4 w-full text-white font-semibold bg-[#6366F1]">
            Get Started
          </button>
          {/* Checks */}
          <div className="my-6 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <CheckIcon className="w-6" />
              <p>20+ assets/products</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckIcon className="w-6" />
              <p>24/7 Support</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckIcon className="w-6" />
              <p>Risk Management</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckIcon className="w-6" />
              <p>Free Signal</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckIcon className="w-6" />
              <p>Unlimited Support</p>
            </div>
          </div>
          {/* Checks */}
          <div className="flex flex-col gap-4">
            <p className="text-sm flex gap-4">
              <span>Min. deposit:</span>{" "}
              <span className="font-semibold">$3,000</span>
            </p>
            <p className="text-sm flex gap-4">
              <span>Max. deposit:</span>{" "}
              <span className="font-semibold">$9,999</span>
            </p>
          </div>
        </div>
        <div className="p-6 w-[20rem] bg-[#F3F4F6] rounded-xl">
          <div className="flex gap-4">
            <p className="text-[#374151]">Gold Package</p>
            <Image src="/gold-trophy.png" width={14} height={14} />
          </div>
          <p className="font-semibold text-2xl mt-2 text-[#101828]">$9,999</p>
          <p className="text-sm text-[#374151] my-3">
            Plan duration is{" "}
            <span className="font-semibold text-[#101828]">7 days</span> and
            guarantees return of{" "}
            <span className="font-semibold text-[#101828]">325%</span>
          </p>
          <button className="btn mt-4 w-full text-white font-semibold bg-[#6366F1]">
            Get Started
          </button>
          {/* Checks */}
          <div className="my-6 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <CheckIcon className="w-6" />
              <p>20+ assets/products</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckIcon className="w-6" />
              <p>24/7 Support</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckIcon className="w-6" />
              <p>Risk Management</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckIcon className="w-6" />
              <p>Free Signal</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckIcon className="w-6" />
              <p>Unlimited Support</p>
            </div>
          </div>
          {/* Checks */}
          <div className="flex flex-col gap-4">
            <p className="text-sm flex gap-4">
              <span>Min. deposit:</span>{" "}
              <span className="font-semibold">$3,000</span>
            </p>
            <p className="text-sm flex gap-4">
              <span>Max. deposit:</span>{" "}
              <span className="font-semibold">$9,999</span>
            </p>
          </div>
        </div>
        <div className="p-6 w-[20rem] bg-[#F3F4F6] rounded-xl">
          <div className="flex gap-4">
            <p className="text-[#374151]">Diamond Package</p>
            <Image src="/gold-trophy.png" width={14} height={14} />
          </div>
          <p className="font-semibold text-2xl mt-2 text-[#101828]">$9,999</p>
          <p className="text-sm text-[#374151] my-3">
            Plan duration is{" "}
            <span className="font-semibold text-[#101828]">7 days</span> and
            guarantees return of{" "}
            <span className="font-semibold text-[#101828]">325%</span>
          </p>
          <button className="btn mt-4 w-full text-white font-semibold bg-[#6366F1]">
            Get Started
          </button>
          {/* Checks */}
          <div className="my-6 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <CheckIcon className="w-6" />
              <p>20+ assets/products</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckIcon className="w-6" />
              <p>24/7 Support</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckIcon className="w-6" />
              <p>Risk Management</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckIcon className="w-6" />
              <p>Free Signal</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckIcon className="w-6" />
              <p>Unlimited Support</p>
            </div>
          </div>
          {/* Checks */}
          <div className="flex flex-col gap-4">
            <p className="text-sm flex gap-4">
              <span>Min. deposit:</span>{" "}
              <span className="font-semibold">$3,000</span>
            </p>
            <p className="text-sm flex gap-4">
              <span>Max. deposit:</span>{" "}
              <span className="font-semibold">$9,999</span>
            </p>
          </div>
        </div>
      </div>
      {/* Cards */}
    </div>
  );
}
