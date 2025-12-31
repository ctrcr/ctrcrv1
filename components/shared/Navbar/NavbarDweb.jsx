import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import MobileNavbar from "./NavbarMweb";
import mnlu from "@/public/mnlu_logo.png";
import ctrcr from "@/public/ctrcr_logo.png";
import { navItems, externalLinks } from "./navConfig";

const Navbar = () => {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState({});

  const handleHover = (menu) => {
    setDropdownOpen((prev) => ({ ...prev, [menu]: true }));
  };

  const handleMouseLeave = (menu) => {
    setDropdownOpen((prev) => ({ ...prev, [menu]: false }));
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 hidden md:block">
        <div className="flex items-center justify-between h-24 pt-2">
          <div className="flex">
            <Link href="/">
              <div className="text-black font-bold text-4xl cursor-pointer flex items-center justify-center gap-2">
                <Image src={ctrcr} width={45} alt="CTRCR Logo" />
                CTRCR
              </div>
            </Link>
          </div>

          <div className="">
            <div className="flex items-baseline space-x-4 text-black">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className={item.dropdown ? "relative" : ""}
                  onMouseEnter={() => item.dropdown && handleHover(item.name)}
                  onMouseLeave={() => item.dropdown && handleMouseLeave(item.name)}
                >
                  <NavLink href={item.href} currentPath={router.pathname}>
                    {item.name}
                  </NavLink>

                  {item.dropdown && dropdownOpen[item.name] && (
                    <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg w-60">
                      <ul>
                        {item.dropdownItems.map((dropdownItem) => (
                          <li key={dropdownItem.name}>
                            <NavLink href={dropdownItem.href}>
                              {dropdownItem.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center my-auto">
            {externalLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <Image
                  width={45}
                  src={link.name === "MNLU Mumbai" ? mnlu : null}
                  alt={`${link.name} Logo`}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <MobileNavbar navItems={navItems} />
    </nav>
  );
};

const NavLink = ({ href, currentPath, children }) => {
  const isActive = href === currentPath;

  return (
    <Link href={href}>
      <span
        className={`text-black hover:text-gray-400 px-3 py-2 rounded-md text-xl font-medium ${isActive ? "text-gray-600" : ""
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