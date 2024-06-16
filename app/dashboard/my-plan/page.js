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
      <h2 className="text-3xl font-semibold mt-[5rem] md:mt-0">Current Plan</h2>
      {/* Header */}
      {/* Banner */}
      <div className="p-8 bg-[#111827] text-white mt-8 rounded-xl">
        <div className="flex flex-col lg:flex-row gap-y-10 justify-between w-4/5">
          <div>
            <p className="font-medium text-sm">Trading Plan</p>
            <div className="flex gap-2 mt-4">
              <p className="text-2xl font-semibold">Bronze Package</p>
              <Image src="/gold-trophy.png" width={23} height={23} />
            </div>

            <div className="flex flex-wrap mt-24 gap-16">
              <div>
                <p className="text-sm text-[#F3F4F6]">Status</p>
                <p className="font-medium">Ongoing</p>
              </div>
              <div>
                <p className="text-sm text-[#F3F4F6]">Price</p>
                <p className="font-medium">$9,999</p>
              </div>
              <div>
                <p className="text-sm text-[#F3F4F6]">Plan Ends</p>
                <p className="font-medium">July 24, 2024</p>
              </div>
            </div>
          </div>

          {/* Container2 */}
          <div>
            <p className="font-medium">Included Plan</p>
            <div className="my-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <CheckIcon className="w-6" />
                <p className="font-medium">20+ assets/products</p>
              </div>
              <div className="flex items-center gap-3">
                <CheckIcon className="w-6" />
                <p className="font-medium">24/7 Support</p>
              </div>
              <div className="flex items-center gap-3">
                <CheckIcon className="w-6" />
                <p className="font-medium">Risk Management</p>
              </div>
              <div className="flex items-center gap-3">
                <CheckIcon className="w-6" />
                <p className="font-medium">Free Signal</p>
              </div>
              <div className="flex items-center gap-3">
                <CheckIcon className="w-6" />
                <p className="font-medium">Unlimited Support</p>
              </div>
            </div>
          </div>
          {/* Container2 */}
        </div>

        <div className="mt-6">
          <button className="btn mt-4 mr-5 w-full lg:w-fit text-white px-8 font-semibold bg-[#1F2937] border-none">
            Cancel Package
          </button>
          <button className="btn mt-4 w-full lg:w-fit text-white px-16 font-semibold bg-[#6366F1] border-none">
            Change Plan
          </button>
        </div>
      </div>
      {/* Banner */}
    </div>
  );
}
