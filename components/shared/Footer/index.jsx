import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import mnlu from "@/public/mnlu_logo_bg.png";
import ctrcr from "@/public/ctrcr_logo_bg.png";

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
      <div className="w-[60%] max-md:w-[90%] mx-auto flex max-md:flex-col max-md:gap-6 mb-8 justify-between items-center">
        <div className=" flex flex-col my-2 justify-center gap-2 items-center">
          <div className="text-2xl">Navigate</div>

          <a href="/">HOME</a>
          <a href="/team">TEAM</a>
          <a href="/events">EVENTS</a>
          <a href="/blogs">BLOG</a>
          <a href="/journal">JOURNAL</a>
        </div>
        <div className="flex-col items-center justify-center max-md:text-center">
          <div className="text-2xl ">Contact</div>
          <p>Centre for Training and Research in Commercial Regulations</p>
          <p>
            Phone: <a href="tel:+918378898560">+91 8378898560</a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:ctrcr@mnluminbai.edu.in">ctrcr@mnlumumbai.edu.in</a>
          </p>
          <div className="flex max-md:justify-center gap-10 mt-6">
            <Image src={mnlu} alt="MNLU" width={40} />
            <Image src={ctrcr} alt="CTRCR" width={40} />
          </div>
        </div>
      </div>
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
