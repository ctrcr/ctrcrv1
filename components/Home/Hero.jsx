import React from "react";
import backgroundImage from "../../public/home_background.svg";
import JournalSlider from "./Carousal/HomeSlider";
import ContactForm from "./Form/ContactForm";
import Content from "./HeroContent/Content";
import Card from "../Home/Archives/Card";

import { journalIssues } from "@/data/journalData";

// Show the 3 most-recent issues in the Archives section
const recentIssues = journalIssues.slice(0, 3);

const Hero = () => {
  return (
    <>
      <section className="hero bg-cover bg-center overflow-hidden flex items-center justify-center text-white text-2xl">
        <div
          style={{ backgroundImage: `url(${backgroundImage.src})` }}
          className="h-screen w-screen bg-cover bg-center flex items-center justify-center bg-no-repeat text-white text-2xl"
        >
          <Content />
        </div>
      </section>
      <section className="bg-white ">
        <section className="flex flex-col items-center justify-center text-white text-2xl">
          <div className="-mt-3">
            <img
              src="landing1.svg"
              alt="Latest Events"
              className="sm:block hidden"
            />
          </div>
          <div className="flex max-sm:block hidden justify-center items-center text-black my-12">
            <h2 className="text-4xl font-semibold mb-2 tracking-wide w-fit">
              <hr className="w-16 h-1 bg-black" />
              <span className="font-bold ">LATEST EVENTS</span>
              <div className={"flex justify-end font-bold"}>
                <hr className="w-16 h-1 bg-black " />
              </div>
            </h2>
          </div>

          <div className="sm:mt-[4rem] overflow-hidden w-full ">
            <JournalSlider />
          </div>

          <div className="text-black flex flex-col justify-center items-center text-center w-[60vw] mt-24 mb-12">
            <a
              href="/events"
              className=" px-6 py-3 rounded-md text-white bg-[#24292F] hover:bg-[#24292F]/70 transition duration-300"
            >
              <button>Explore More</button>
            </a>
          </div>
        </section>
        <section>
          <div className="flex justify-center items-center my-12">
            <h2 className="text-5xl font-semibold mb-2 tracking-wide w-fit">
              <hr className="w-16 h-1 bg-black" />
              <span className="font-bold ">ARCHIVES</span>
              <div className={"flex justify-end  font-bold"}>
                <hr className="w-16 h-1 bg-black " />
              </div>
            </h2>
          </div>
          <div className="flex max-md:flex-col w-[80%] items-center justify-evenly max-md:gap-24 mx-auto">
            {recentIssues.map((issue) => (
              <Card
                key={issue.id}
                image={issue.archiveCover}
                title={issue.title}
                regLink={issue.pdf}
              />
            ))}
          </div>
          <div className="text-black flex justify-center items-center text-center w-[60vw] mx-auto mt-24 mb-12 text-2xl">
            <button>
              <a
                href="/journal"
                className=" px-6 py-3 rounded-md text-white bg-[#24292F] hover:bg-[#24292F]/70 transition duration-300"
              >
                Explore More
              </a>
            </button>
          </div>
        </section>
        <section className=" flex items-center justify-center text-white text-2xl max-lg:min-h-[65vh]">
          <div className=" w-[80vw] flex overflow-hidden  items-center justify-center">
            <img
              src="boxframehorizontal.svg"
              className="h-full hidden xl:block"
            />
            <div className="h-screen xl:h-0"></div>

            <div className="text-black overflow-hidden absolute flex gap-[5vw]">
              <ContactForm />

              <div className="hidden lg:block">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.738987415271!2d72.91266857520641!3d19.11910318209439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7ee945fd769%3A0x9d653864cdd43e39!2sMaharashtra%20National%20Law%20University%20Mumbai!5e0!3m2!1sen!2sin!4v1709800789414!5m2!1sen!2sin"
                  width="400"
                  height="500"
                  style={{ border: "0" }}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Hero;
