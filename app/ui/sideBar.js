"use client"
import React, { useContext } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { NavBarContext } from "./navBar.provider";
// import NavProvider from "./navBar.provider";

const SideBarNav = () => {
  const { sideBarHidden, toggleSideBarHidden } = useContext(NavBarContext);
  return (
    <motion.div
      animate={{ x: sideBarHidden ? -2000 : 0 }}
      transition={{ duration: 0.5 }}
      className="fixed z-30 top-12 w-full md:hidden"
      initial={{ x: -2000 }}
    >
      <div className="bg-stone-900 border-red-500 text-white h-screen py-10 flex flex-col items-center uppercase font-bold text-xl">
        <div className="mb-7">
          <Link href={"/"} className="myLink">
            Home
          </Link>
        </div>
        <div className="mb-7">
          <Link href={"/"} className="myLink" onClick={toggleSideBarHidden}>
            Drivers Standings
          </Link>
        </div>
        <div className="mb-7">
          <Link href={"/"} className="myLink">
            Constructors Standings
          </Link>
        </div>
        <div className="mb-7">
          <Link href={"/"} className="myLink">
            Drivers List
          </Link>
        </div>
        <div>
          <Link href={"/"} className="myLink">
            Constructors List
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

// function Sidebar() {
//   return (
//     <NavProvider>
//       <SideBarNav />
//     </NavProvider>
//   );
// }

export default SideBarNav;
