import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import MobileNavbar from "./NavbarMweb";
import mnlu from "@/public/mnlu_logo.png";
import ctrcr from "@/public/ctrcr_logo.png";

const Navbar = () => {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState({
    blog: false,
    journal: false,
  });

  const handleHover = (menu) => {
    setDropdownOpen((prev) => ({ ...prev, [menu]: true }));
  };

  const handleMouseLeave = (menu) => {
    setDropdownOpen((prev) => ({ ...prev, [menu]: false }));
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg ">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 hidden md:block">
        <div className="flex items-center justify-between h-24 pt-2">
          <div className="flex">
            <Link href="/">
              <div className="text-black font-bold text-4xl cursor-pointer flex items-center justify-center gap-2">
                <Image src={ctrcr} width={45} />
                CTRCR
              </div>
            </Link>
          </div>

          <div className="">
            <div className="flex items-baseline space-x-4 text-black">
              <NavLink href="/" currentPath={router.pathname}>
                Home
              </NavLink>
              <NavLink href="/team" currentPath={router.pathname}>
                Team
              </NavLink>
              <NavLink href="/events" currentPath={router.pathname}>
                Events
              </NavLink>
              <NavLink href="/ncccc" currentPath={router.pathname}>
              NCCCC
              </NavLink>
              <div
                className="relative"
                onMouseEnter={() => handleHover("blog")}
                onMouseLeave={() => handleMouseLeave("blog")}
              >
                <NavLink href="/fccl" currentPath={router.pathname}>
                FCCL
                </NavLink>
                {dropdownOpen.blog && (
                  <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg w-60">
                    <ul>
                      <li>
                        <NavLink href="/fccl/">Blog</NavLink>
                      </li>
                      <li>
                        <NavLink href="/fccl/editorial-board">
                          Editorial Board
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div
                className="relative"
                onMouseEnter={() => handleHover("journal")}
                onMouseLeave={() => handleMouseLeave("journal")}
              >
                <NavLink href="/journal" currentPath={router.pathname}>
                  Journal
                </NavLink>
                {dropdownOpen.journal && (
                  <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg w-60">
                    <ul>
                      <li>
                        <NavLink href="/journal">Journal</NavLink>
                      </li>
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
            </div>
          </div>

          <div className="flex items-center justify-center my-auto">
            <Link href="https://mnlumumbai.edu.in/">
              <Image width={45} src={mnlu} />
            </Link>
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
        className={`text-black hover:text-gray-400 px-3 py-2 rounded-md text-xl font-medium ${isActive ? " text-gray-600" : ""
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
