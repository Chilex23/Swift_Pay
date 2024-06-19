"use client";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { NavBarContext } from "./navBar.provider";

const SideBarNav = () => {
  const { sideBarHidden, toggleSideBarHidden } = useContext(NavBarContext);
  return (
    <motion.div
      animate={{ x: sideBarHidden ? -2000 : 0 }}
      transition={{ duration: 0.5 }}
      className="fixed z-50 top-12 w-full md:hidden"
      initial={{ x: -2000 }}
    >
      <div className="bg-[#14181F] border-red-500 text-white h-screen py-10 pl-6 flex flex-col">
        <div className="mb-7">
          <Link href={"/"} onClick={toggleSideBarHidden}>
            Home
          </Link>
        </div>
        <div className="mb-7">
          <Link href={"/pricing"} onClick={toggleSideBarHidden}>
            Pricing
          </Link>
        </div>
        <div className="mb-7">
          <Link href={"/affiliate-program"} onClick={toggleSideBarHidden}>
            Affiliate Program
          </Link>
        </div>
        <div className="mb-7">
          <Link href={"/about-us"} onClick={toggleSideBarHidden}>
            About Us
          </Link>
        </div>
        <div className="mb-7">
          <Link href={"/support"} onClick={toggleSideBarHidden}>
            Support
          </Link>
        </div>
        <div>
          <Link href={"/login"} onClick={toggleSideBarHidden}>
            Log In
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default SideBarNav;
