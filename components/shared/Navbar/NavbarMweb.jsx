import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ctrcr from "@/public/ctrcr_logo.png";
import mnlu from "@/public/mnlu_logo.png";

const MobileNavbar = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setOpenSubMenu(null);
  };

  const toggleSubMenu = (menu) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  return (
    <div className="md:hidden">
      <div className="flex justify-between items-center px-4 py-2">
        <Link href="/">
          <div className="text-black font-bold text-2xl cursor-pointer flex items-center gap-2">
            <Image src={ctrcr} width={35} alt="CTRCR Logo" />
            CTRCR
          </div>
        </Link>

        <div className="flex items-center gap-4">
          <Link href="https://mnlumumbai.edu.in/">
            <Image width={35} src={mnlu} alt="MNLU Logo" />
          </Link>
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white shadow-lg"
          >
            <div className="px-4 py-2 space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleSubMenu(item.name)}
                        className={`w-full text-left px-3 py-2 text-lg font-medium flex justify-between items-center ${router.pathname === item.href ? "text-gray-600" : "text-black"
                          }`}
                      >
                        {item.name}
                        <svg
                          className={`w-4 h-4 transition-transform ${openSubMenu === item.name ? "rotate-180" : ""
                            }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </button>
                      <AnimatePresence>
                        {openSubMenu === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-6 space-y-2 mt-2"
                          >
                            {item.dropdownItems.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className={`block px-3 py-1 text-base ${router.pathname === subItem.href
                                  ? "text-gray-600"
                                  : "text-black"
                                  }`}
                                onClick={toggleMenu}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block px-3 py-2 text-lg font-medium ${router.pathname === item.href ? "text-gray-600" : "text-black"
                        }`}
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavbar;