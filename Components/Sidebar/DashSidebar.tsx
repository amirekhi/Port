"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search } from "./Search";
import CloseButton from "../Closebutton";
import ThemeToggle from "../ThemeToggle";
import { usePathname } from "next/navigation";
import { DashRouteSelect } from "./DashRouteSelect";

export const DashSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const toggleState = () => {
    setIsOpen((prev) => !prev);
  };

  // Event listener to close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Lock body scroll on open
  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      body.style.overflow = 'hidden';
      body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      body.style.overflow = '';
      body.style.paddingRight = '';
    }
    return () => {
      body.style.overflow = '';
      body.style.paddingRight = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Toggle Button for mobile */}
      <div className="z-50 fixed top-5 left-5 md:hidden">
        <CloseButton onClick={toggleState} isOpen={isOpen} />
      </div>

      {/* Sidebar container */}
      <div
        ref={sidebarRef}
        className={`
          bg-[#37228B] light:bg-[#5f0297] 
          w-[250px] h-screen p-6 pt-[60px]
          transition-transform duration-300 
          md:relative md:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          fixed md:static top-0 left-0 z-50
        `}
      >
        {/* Close Button for mobile inside sidebar */}
        <div className="absolute top-4 right-4 md:hidden">
          <CloseButton onClick={toggleState} isOpen={isOpen} />
        </div>

        {/* Sidebar content */}
        <div className="overflow-y-hidden sticky top-4 h-[calc(100vh-32px-48px)]">
          <Search />
          <DashRouteSelect />
        </div>

        {/* Theme Toggle at bottom */}
        <div className="absolute bottom-[90px] left-5">
          <ThemeToggle />
        </div>
      </div>
    </>
  );
};
