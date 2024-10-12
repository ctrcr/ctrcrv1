import React, { useState } from "react";
import { useRouter } from "next/router";
import { set } from "mongoose";

const Footer = () => {
  const [clickCount, setClickCount] = useState(0);
  const router = useRouter();

  const handleClick = () => {
    setClickCount((prevCount) => prevCount + 1);

    if (clickCount + 1 === 5) {
      router.push("/admin");
      setClickCount(0);
    }
  };

  return (
    <footer className="bg-black text-white p-4">
      <div className="container mx-auto text-center">
        <a href="https://www.ctrcr.com" className="text-white hover:underline">
          <p className="mb-2">CTRCR.COM</p>
        </a>
        <p onClick={handleClick} className="cursor-pointer">
          ©2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
