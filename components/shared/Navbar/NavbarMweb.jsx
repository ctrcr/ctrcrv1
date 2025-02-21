import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import mnlu from "@/public/mnlu_logo_bg.png";
import ctrcr from "@/public/ctrcr_logo_bg_half.png";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBlogDropdown, setShowBlogDropdown] = useState(false);
  const [showJournalDropdown, setShowJournalDropdown] = useState(false);
  const router = useRouter();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  const toggleBlogDropdown = () => {
    setShowBlogDropdown(!showBlogDropdown);
  };

  const toggleJournalDropdown = () => {
    setShowJournalDropdown(!showJournalDropdown);
  };

  return (
    <div className="md:hidden w-full">
      <div className="flex justify-between w-full items-center px-4 h-[8vh] py-2 bg-black text-white">
        <Link href="/">
          <div className="flex justify-center items-center gap-2">
            <Image src={ctrcr} width={30} alt="CTRCR logo" />

            <div className="text-white font-bold text-xl cursor-pointer">
              CTRCR
            </div>
          </div>
        </Link>
        <button
          onClick={toggleNavbar}
          className="text-white focus:outline-none"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>
      {isOpen && (
        <div className="bg-black text-white h-screen w-full flex flex-col items-center justify-center">
          <div className="w-full flex flex-col items-center -mt-[300px] space-y-4">
            <NavLink
              href="/"
              currentPath={router.pathname}
              toggleNavbar={toggleNavbar}
            >
              Home
            </NavLink>
            <NavLink
              href="/team"
              currentPath={router.pathname}
              toggleNavbar={toggleNavbar}
            >
              Team
            </NavLink>
            <NavLink
              href="/events"
              currentPath={router.pathname}
              toggleNavbar={toggleNavbar}
            >
              Events
            </NavLink>
            <NavLink
              href="/ncccc"
              currentPath={router.pathname}
              toggleNavbar={toggleNavbar}
            >
              Ncccc
            </NavLink>
            <div className="relative">
              <button
                onClick={toggleBlogDropdown}
                className="text-xl font-semibold text-gray-400 hover:text-gray-300 py-2 px-4 rounded-md transition-colors duration-200"
              >
                Blog <span className="ml-2">▼</span>
              </button>
              {showBlogDropdown && (
                <div className="absolute left-0 mt-2 bg-gray-800 rounded-md shadow-lg z-50">
                  <NavLink href="/fccl" toggleNavbar={toggleNavbar}>
                    Fccl
                  </NavLink>
                  <NavLink
                    href="/fccl/editorial-board"
                    toggleNavbar={toggleNavbar}
                  >
                    Editorial Board
                  </NavLink>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={toggleJournalDropdown}
                className="text-xl font-semibold text-gray-400 hover:text-gray-300 py-2 px-4 rounded-md transition-colors duration-200"
              >
                Journal <span className="ml-2">▼</span>
              </button>
              {showJournalDropdown && (
                <div className="absolute left-0 mt-2 bg-gray-800 rounded-md shadow-lg">
                  <NavLink href="/journal" toggleNavbar={toggleNavbar}>
                    Journal
                  </NavLink>
                  <NavLink
                    href="/journal/editorial-board"
                    toggleNavbar={toggleNavbar}
                  >
                    Editorial Board
                  </NavLink>
                  <NavLink
                    href="/journal/board-of-advisors"
                    toggleNavbar={toggleNavbar}
                  >
                    Board of Advisors
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const NavLink = ({ href, currentPath, children, toggleNavbar }) => {
  const isActive = href === currentPath;

  return (
    <Link href={href} onClick={toggleNavbar}>
      <div
        className={`block w-[100%] text-gray-400 hover:text-gray-300 py-2 px-4 rounded-md transition-colors duration-200 text-xl font-semibold ${isActive ? "text-gray-300 bg-gray-700" : ""
          }`}
      >
        <div className={`${isActive ? "border-b-2 border-gray-300" : ""}`}>
          {children}
        </div>
      </div>
    </Link>
  );
};

export default MobileNavbar;
