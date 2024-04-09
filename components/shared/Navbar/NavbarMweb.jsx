import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden w-full">
      <div className="flex justify-between w-full items-center px-4 h-[8vh] py-2 bg-gray-900 text-white">
        <Link href="/">
          <span className="text-white font-bold text-xl cursor-pointer">
            CTRCR
          </span>
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
        <div className="bg-gray-900 text-white h-[90vh] w-full justify-center items-center flex flex-col gap-10">
          <div className="w-full justify-center items-center -mt-[300px] flex flex-col space-y-4">
            <NavLink
              href="/"
              currentPath={router.pathname}
              toggleNavbar={toggleNavbar}
            >
              Home
            </NavLink>
            <div className="flex flex-col gap-4 justify-center items-center">
              <NavLink
                href="/journal"
                currentPath={router.pathname}
                toggleNavbar={toggleNavbar}
              >
                Journal
              </NavLink>
              <div className="flex flex-col gap-2 items-center">
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
            </div>
            <NavLink
              href="/events"
              currentPath={router.pathname}
              toggleNavbar={toggleNavbar}
            >
              Events
            </NavLink>
            {/* <NavLink
              href="/team"
              currentPath={router.pathname}
              toggleNavbar={toggleNavbar}
            >
              Team
            </NavLink>
            <NavLink
              href="/esg"
              currentPath={router.pathname}
              toggleNavbar={toggleNavbar}
            >
              ESG
            </NavLink> */}
          </div>

          {/* <div className="">
            <Link href="/">
              <Image width={125} height={40} src="btn.svg" />
            </Link>
          </div> */}
        </div>
      )}
    </div>
  );
};

const NavLink = ({ href, currentPath, children, toggleNavbar }) => {
  const isActive = href === currentPath;

  return (
    <Link href={href} onClick={toggleNavbar}>
      <span
        className={`text-gray-400 hover:text-gray-300 text-xl font-semibold ${
          isActive ? " text-gray-300" : ""
        }`}
        style={{ textDecoration: "none" }}
      >
        <span
          style={{
            borderBottom: isActive ? "2px solid" : "none",
          }}
        >
          {children}
        </span>
      </span>
    </Link>
  );
};

export default MobileNavbar;
