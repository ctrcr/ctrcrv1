import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed w-[100vw] ">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="items-center h-16">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <Link href="/">
                <span className="text-gray-600 font-bold text-xl">CTRCR</span>
              </Link>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/about">
                  <span className="text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium">
                    Home
                  </span>
                </Link>
                <Link href="/about">
                  <span className="text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium">
                    Journal
                  </span>
                </Link>
                <Link href="/about">
                  <span className="text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md textlg font-medium">
                    Events
                  </span>
                </Link>
                <Link href="/services">
                  <span className="text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md textlg font-medium">
                    Team
                  </span>
                </Link>
                <Link href="/contact">
                  <span className="text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md textlg font-medium">
                    ESG
                  </span>
                </Link>
              </div>
            </div>

            <div className="mt-1">
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

export default Navbar;
