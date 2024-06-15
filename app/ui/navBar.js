"use client";
import { useContext, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Sidebar from "./sideBar";
import NavProvider from "./navBar.provider";
import { NavBarContext } from "./navBar.provider";

const NavBarNav = () => {
  const { sideBarHidden, toggleSideBarHidden } = useContext(NavBarContext);
//   const [navBarWidth, setNavBarWidth] = useState("");
//   useEffect(() => {
//     function handleResize() {
//       setNavBarWidth(window.innerWidth);
//     }
//     setNavBarWidth(window.innerWidth);
//     console.log(navBarWidth);
//     window.addEventListener("resize", handleResize);
//   });
  return (
    <>
      <div onClick={toggleSideBarHidden} className="cursor-pointer md:hidden w-full bg-red-700">
        {sideBarHidden ? (
          <Bars3Icon className="w-12" />
        ) : (
          <XMarkIcon className="w-12" />
        )}
      </div>
      <>
        {" "}
        {/* Nav BAr */}
        <div className="md:flex px-20 py-5 hidden">
          <div className="w-32 flex gap-x-2 md:w-40 mr-[8rem]">
            <Image
              src="/Light-Logo.png"
              width={30}
              height={30}
              className=""
              alt="Swift Pay Logo"
            />
            <p className="text-2xl font-bold">Swift</p>
          </div>

          <div className="flex gap-x-16 text-sm font-medium items-center">
            <Link href={"/"}>Home</Link>
            <Link href={"/pricing"}>Pricing</Link>
            <p>Affiliate Program</p>
            <Link href={"/about-us"}>About Us</Link>
            <p>Support</p>
            <div className="ml-10 flex items-center gap-x-5">
              <Link href={"/login"}>Log in</Link>
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
