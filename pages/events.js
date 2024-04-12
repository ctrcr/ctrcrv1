import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@/components/Events/Card";
import Image from "next/image";
import loader from "@/public/loader.svg";

const EventsPage = () => {
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/v1/events");
        setEventsData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-[#EBEBEB] overflow-y-hidden">
      <div className="px-[6%] mb-[6%]  max-md:mt-20 mt-20 container mx-auto text-[#0F111F] p-4 space-y-[10%] ">
        <div className="space-y-[5%]">
          <div className="flex justify-center items-center">
            <h2 className="text-4xl font-semibold mb-2 tracking-wide w-fit">
              <hr className="w-24 h-1 bg-black" />
              <span className="font-bold ">OUR EVENTS</span>
              <div className={"flex justify-end w-56 font-bold"}>
                <hr className="w-24 h-1 bg-black " />
              </div>
            </h2>
          </div>

          {loading ? ( // Check if loading is true
            <div className="flex justify-center items-center h-screen">
              <Image src={loader} alt="Loading" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
              {eventsData.map((event, index) => (
                <Card
                  key={index}
                  image={event.image}
                  title={event.title}
                  description={event.description}
                  date={event.date}
                  time={event.time}
                  regLink={event.regLink}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
