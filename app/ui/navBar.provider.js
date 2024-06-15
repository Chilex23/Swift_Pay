"use client";
import React, { createContext, useState } from "react";

export const NavBarContext = createContext({
  sideBarHidden: true,
  toggleSideBarHidden: () => {},
});

const NavProvider = ({ children }) => {
  const [sideBarHidden, setSideBarHidden] = useState(true);

  const toggleSideBarHidden = () => {
    setSideBarHidden(!sideBarHidden);
  };

  return (
    <NavBarContext.Provider
      value={{
        sideBarHidden,
        toggleSideBarHidden,
      }}
    >
      {children}
    </NavBarContext.Provider>
  );
};

export default NavProvider;
