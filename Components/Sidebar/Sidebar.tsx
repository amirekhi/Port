"use client";

import React, { useState, useEffect, useRef } from "react";
import { AccountToggle } from "./AccountToggle";
import { Search } from "./Search";
import { RouteSelect } from "./RouteSelect";
import { Plan } from "./Plan";
import { HiMenu } from "react-icons/hi";
import CloseButton from "../Closebutton";
import Closebutton from "../Closebutton";
import ThemeToggle from "../ThemeToggle";
import MagicButton from "../MagicButton";
import Link from "next/link";
import { FaDownload } from 'react-icons/fa'; // "Fa" = FontAwesome icons
import { usePathname } from "next/navigation";
export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const PERoute = pathname.toLowerCase().includes("pe");
  // Ref to the sidebar
  const sidebarRef = useRef<HTMLDivElement | null>(null);


  const toggleState = () => {
    setIsOpen((prev) => !prev);
  };

  // Event listener to close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event : any) => {
      // Check if the sidebar is open and the click is outside
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    // Add event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Clean up event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);


  useEffect(() => {
    const body = document.body;
  
    if (isOpen) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      body.style.overflow = 'hidden';
      body.style.paddingRight = `${scrollBarWidth}px`; // Compensate for scrollbar
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
      {/* Toggle Button */}
      <div
        className={` z-50 fixed top-[20px] left-[30px]   md:hidden `}
      >
        <Closebutton onClick={toggleState} isOpen={isOpen}/>
      </div>

      {/* Sidebar */}
        <div
          ref={sidebarRef}
          className={`${
            isOpen ? "-translate-x-0 " : "-translate-x-full"
          } transition duration-300 bg-[#37228B] light:bg-[#5f0297] absolute  h-full max-md:fixed top-0 left-0 p-6 z-50 pt-[60px] md:hidden `}
        >
          {/* Animated Close Button in top right corner */}
          <div className="absolute top-4 right-4">
            <CloseButton onClick={toggleState} isOpen={isOpen} />
          </div>

          {/* Sidebar content */}
          <div className="overflow-y-auto sticky top-4 h-[calc(100vh-32px-48px)]">
            
            <Search />
            <RouteSelect />
          </div>
          <Plan />
             <div className="absolute  z-50 bottom-[90px] left-[20px] "  >
                       <ThemeToggle/>
              </div>
             <div className="absolute  z-50 bottom-[150px] left-[20px] "  >
                  <Link href={'/AmirPortfolio.pdf'} download  >
                      <MagicButton
                      title={PERoute ? ('رزومه ی من') : ('My Portfolio')}
                      position="right"
                      buttonClasses="md:w-32" 
                      icon={<FaDownload/>}  
                          />
                  </Link>
              </div>
      </div>

    </>
  );
};