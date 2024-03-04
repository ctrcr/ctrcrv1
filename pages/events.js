import React from "react";
import eventsData from "../components/Events/events.json";
import Card from "@/components/Events/Card";

import img1 from "../components/Events/assets/img1.svg";
import img2 from "../components/Events/assets/img2.svg";
import img3 from "../components/Events/assets/img3.svg";

const imageImports = {
  img1: img1,
  img2: img2,
  img3: img3,
};

const EventsPage = () => {
  return (
    <div className="bg-[#EBEBEB] h-screen overflow-y-scroll">
      <div className="px-[6%] mb-[6%] mt-[10%] container mx-auto text-[#0F111F] p-4 space-y-[10%] ">
        {eventsData.map((section, index) => (
          <div key={index} className="space-y-[5%]">
            <h1 className="text-5xl font-normal text-center capitalize inline-flex justify-start items-start">
              {section.title}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {section.cardDetails.map((card, cardIndex) => (
                <Card
                  key={cardIndex}
                  image={imageImports[card.image]}
                  title={card.title}
                  description={card.description}
                  date={card.date}
                  time={card.time}
                  likes={card.likes}
                />
              ))}
            </div>

            <div className="flex justify-center">
              <button
                className="border-[1px] rounded-[10px] px-10 py-2 text-white font-normal text-lg tracking-widest"
                style={{
                  background:
                    "linear-gradient(225deg, #0083AC 14.89%, #08141C 85.85%)",
                }}
                type="button"
              >
                Load More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
