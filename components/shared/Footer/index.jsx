import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import mnlu from "@/public/mnlu_logo_bg.png";
import ctrcr from "@/public/ctrcr_logo_bg.png";
import linkedin from "@/public/linkedin_logo.png";
import instagram from "@/public/instagram-logo.png";
import youtube from "@/public/youtube_logo.png";
import twitter from "@/public/twitter_logo.png";

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
        <div className="max-md:hidden flex flex-col my-2 justify-center gap-4 items-center">
          <div className="text-2xl">Navigate</div>

          <div className="grid grid-cols-3 gap-x-8 gap-y-2 text-center">
            <a href="/" className="hover:text-gray-300 transition-colors">HOME</a>
            <a href="/fccl" className="hover:text-gray-300 transition-colors">FCCL</a>
            <a href="/team" className="hover:text-gray-300 transition-colors">TEAM</a>

            <a href="/events" className="hover:text-gray-300 transition-colors">EVENTS</a>
            <a href="/ncccc" className="hover:text-gray-300 transition-colors">NCCCC</a>
            <a href="/ncddc" className="hover:text-gray-300 transition-colors">NCDDC</a>

            <a href="/article-writing-competition" className="hover:text-gray-300 transition-colors">ARTICLE WRITING</a>
            <a href="/books" className="hover:text-gray-300 transition-colors">BOOKS</a>
            <a href="/journal" className="hover:text-gray-300 transition-colors">JOURNAL</a>
          </div>
        </div>
        <div className="flex-col items-center justify-center max-md:text-center">
          <div className="text-2xl ">Contact</div>
          <p>Centre for Training and Research in Commercial Regulations</p>
          <p>
            Phone: <a href="tel:+918378898560">+91 8378898560</a>,{" "}
            <a href="tel:+917558637950">+91 7558637950</a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:ctrcr@mnluminbai.edu.in">ctrcr@mnlumumbai.edu.in</a>
          </p>
          <div className="flex max-md:justify-center max-md:flex-col gap-10 mt-6">
            <div className="flex gap-6 justify-center">
              <a
                href="https://mnlumumbai.edu.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={mnlu}
                  alt="MNLU"
                  width={50}
                  className="hover:opacity-80 transition-opacity"
                />
              </a>
              <a
                href="https://www.ctrcr.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={ctrcr}
                  alt="CTRCR"
                  width={50}
                  className="hover:opacity-80 transition-opacity"
                />
              </a>
            </div>
            <div className="flex text-center flex-col justify-between gap-2">
              Socials
              <div className="flex max-md:justify-center gap-6">
                <a
                  href="https://www.linkedin.com/in/ctrcr-centre-for-training-and-research-in-commercial-regulations-895a8024a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={linkedin}
                    alt="LinkedIn"
                    width={40}
                    className="hover:opacity-80 transition-opacity"
                  />
                </a>
                <a
                  href="https://instagram.com/ctrcr_mnlu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={instagram}
                    alt="Instagram"
                    width={40}
                    className="hover:opacity-80 transition-opacity"
                  />
                </a>
                <a
                  href="https://www.youtube.com/@ctrcrmnlu9500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={youtube}
                    alt="YouTube"
                    width={40}
                    className="hover:opacity-80 transition-opacity"
                  />
                </a>
                {/* <Image src={twitter} alt="CTRCR" width={40} /> */}
              </div>
            </div>
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
