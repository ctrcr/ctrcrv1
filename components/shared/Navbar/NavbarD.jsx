import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="absolute w-[100vw]">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="items-center h-16 pt-2">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <Link href="/">
                <span className="text-gray-600 font-bold text-xl">CTRCR</span>
              </Link>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink href="/" currentPath={router.pathname}>
                  Home
                </NavLink>
                <NavLink href="/journal" currentPath={router.pathname}>
                  Journal
                </NavLink>
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
