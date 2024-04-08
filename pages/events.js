// EventsPage.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@/components/Events/Card";

const EventsPage = () => {
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/v1/events");
        setEventsData(response.data.data);
        // console.log("Events Data:", response);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-[#EBEBEB] overflow-y-hidden">
      <div className="px-[6%] mb-[6%] sm:mt-[10%] mt-20  container mx-auto text-[#0F111F] p-4 space-y-[10%] ">
        <div className="space-y-[5%]">
          <h1 className="text-5xl font-normal text-center capitalize inline-flex justify-start items-start">
            Our Events
          </h1>

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
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
