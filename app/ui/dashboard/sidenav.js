import Link from "next/link";
import Image from "next/image";
import NavLinks from "@/app/ui/dashboard/nav-links";
import { PhoneIcon, GiftIcon } from "@heroicons/react/24/outline";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-1 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md p-4 md:h-20"
        href="/"
      >
        <div className="w-32 flex gap-x-2 text-black md:w-40">
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
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <div className="flex flex-col gap-y-1">
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PhoneIcon className="w-6" />
            <div className="hidden md:block">Support</div>
          </button>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <GiftIcon className="w-6" />
            <div className="hidden md:block">Referral</div>
          </button>
          {/* Bottom */}
          <div className="rounded-md h-fit bg-[#111827] text-white relative">
            <div className="mt-4 mx-4">
              <p className="font-semibold leading-5">
                Get started with your investment
              </p>
              <p className="text-xs mt-3">
                Get to choose the package that works for you
              </p>
            </div>
            <Image
              src="/trophy.png"
              width={200}
              height={200}
              className="relative translate-x-[85px] -translate-y-[24px] -rotate-[35deg] -z-0"
              alt="trophy"
            />
          </div>
          {/* Bottom */}
        </div>
      </div>
    </div>
  );
}
