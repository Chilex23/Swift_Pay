"use client";
import { useContext } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Sidebar from "./sideBar";
import NavProvider from "./navBar.provider";
import { NavBarContext } from "./navBar.provider";

const NavBarNav = () => {
  const { sideBarHidden, toggleSideBarHidden } = useContext(NavBarContext);
  const pathname = usePathname();

  return (
    <>
      <div
        onClick={toggleSideBarHidden}
        className="cursor-pointer md:hidden w-full bg-[#14181F] py-3 z-50 fixed top-0"
      >
        {sideBarHidden ? (
          <div className="flex justify-between gap-x-2 mx-4">
            <div className="flex items-center gap-2">
              <Image
                src="/Light-Logo.png"
                width={30}
                height={30}
                className=""
                alt="Swift Pay Logo"
              />
              <p className="text-2xl font-bold">Swift</p>
            </div>

            <Bars3Icon className="w-12" />
          </div>
        ) : (
          <div className="flex justify-between gap-x-2 mx-4">
            <div className="flex items-center gap-2">
              <Image
                src="/Light-Logo.png"
                width={30}
                height={30}
                className=""
                alt="Swift Pay Logo"
              />
              <p className="text-2xl font-bold">Swift</p>
            </div>

            <XMarkIcon className="w-12" />
          </div>
        )}
      </div>
      <>
        {" "}
        {/* Nav BAr */}
        <div className="md:flex justify-between gap-9 px-6 w-full lg:px-20 py-5 hidden">
          <div className="w-32 flex items-center gap-x-2 md:w-fit">
            <Image
              src="/Light-Logo.png"
              width={30}
              height={30}
              className=""
              alt="Swift Pay Logo"
            />
            <p className="text-2xl font-bold">Swift</p>
          </div>

          <div className="flex gap-x-6 text-xs lg:text-sm font-medium items-center">
            <Link
              href={"/"}
              className={clsx(
                "hover:bg-white hover:text-black p-2 rounded-md",
                {
                  "bg-[#2467E3] text-white": pathname === "/",
                }
              )}
            >
              Home
            </Link>
            <Link
              href={"/pricing"}
              className={clsx(
                "hover:bg-white hover:text-black p-2 rounded-md",
                {
                  "bg-[#2467E3] text-white": pathname === "/pricing",
                }
              )}
            >
              Pricing
            </Link>
            <p>Affiliate Program</p>
            <Link
              href={"/about-us"}
              className={clsx(
                "hover:bg-white hover:text-black p-2 rounded-md",
                {
                  "bg-[#2467E3] text-white": pathname === "/about-us",
                }
              )}
            >
              About Us
            </Link>
            <p>Support</p>
            <div className="ml-10 flex items-center gap-x-5">
              <Link
                href={"/login"}
                className="hover:bg-white hover:text-black p-2 rounded-xl"
              >
                Log in
              </Link>
              <div className="h-10 rounded-md bg-gradient-to-r from-indigo-500 via-yellow-200 to-pink-400 p-[2px]">
                <Link
                  href={"/signup"}
                  className="h-full w-full bg-gray-800 flex items-center px-2"
                >
                  Create an account
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Nav BAr */}
      </>
      <Sidebar />
    </>
  );
};

function NavBar() {
  return (
    <NavProvider>
      <NavBarNav />
    </NavProvider>
  );
}

export default NavBar;
