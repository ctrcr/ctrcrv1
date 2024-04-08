import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

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
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 pt-2">
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-gray-600 font-bold text-xl cursor-pointer">
                CTRCR
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="/" currentPath={router.pathname}>
                Home
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
                  <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
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
              <NavLink href="/events" currentPath={router.pathname}>
                Events
              </NavLink>
              <NavLink href="/team" currentPath={router.pathname}>
                Team
              </NavLink>
              <NavLink href="/esg" currentPath={router.pathname}>
                ESG
              </NavLink>
            </div>
          </div>

          <div className="">
            <Link href="/">
              <Image width={125} height={40} src="btn.svg" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, currentPath, children }) => {
  const isActive = href === currentPath;

  return (
    <Link href={href}>
      <span
        className={`text-gray-600 hover:text-gray-400 px-3 py-2 rounded-md text-lg font-medium ${
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
