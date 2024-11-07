import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import MobileNavbar from "./NavbarMweb";
import mnlu from "@/public/mnlu_logo.png";

const Navbar = () => {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleHover = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg ">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 hidden md:block">
        <div className="flex items-center justify-between h-24 pt-2">
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-black font-bold text-4xl cursor-pointer">
                CTRCR
              </span>
            </Link>
          </div>

          <div className="">
            <div className="ml-10 flex items-baseline space-x-4 text-black">
              <NavLink href="/" currentPath={router.pathname}>
                Home
              </NavLink>
              <NavLink href="/team" currentPath={router.pathname}>
                Team
              </NavLink>
              <NavLink href="/events" currentPath={router.pathname}>
                Events
              </NavLink>
              <NavLink href="/blogs" currentPath={router.pathname}>
                Blog
              </NavLink>
              <div
                className="relative"
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}
              >
                <NavLink href="/journal" currentPath={router.pathname}>
                  Journal
                </NavLink>
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg w-60">
                    <ul>
                      <li>
                        <NavLink href="/journal/editorial-board">
                          Editorial Board
                        </NavLink>
                      </li>
                      <li>
                        <NavLink href="/journal/board-of-advisors">
                          Board of Advisors
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* <NavLink href="/team" currentPath={router.pathname}>
                Team
              </NavLink>
              <NavLink href="/esg" currentPath={router.pathname}>
                ESG
              </NavLink> */}
            </div>
          </div>

          <div className="flex items-center justify-center my-auto">
            <Image width={45} src={mnlu} />
          </div>
        </div>
      </div>
      <MobileNavbar />
    </nav>
  );
};

const NavLink = ({ href, currentPath, children }) => {
  const isActive = href === currentPath;

  return (
    <Link href={href}>
      <span
        className={`text-black hover:text-gray-400 px-3 py-2 rounded-md text-xl font-medium ${
          isActive ? " text-gray-600" : ""
        }`}
        style={{ textDecoration: "none" }}
      >
        <span
          style={{
            borderBottom: isActive ? "2px solid" : "none",
            paddingBottom: "3px",
          }}
        >
          {children}
        </span>
      </span>
    </Link>
  );
};

export default Navbar;
