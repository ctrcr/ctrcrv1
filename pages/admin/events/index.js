import React, { useState, useEffect } from "react";
import axios from "axios";
import EditCard from "@/components/Events/EditCard";
import Image from "next/image";
import loader from "@/public/loader.svg";
import withAuth from "@/components/Auth/withAuth";

const AdminEventsPage = () => {
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/v1/events");
        setEventsData(response.data.data);
        console.log("Events Data:", response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-[#EBEBEB] overflow-y-hidden min-h-screen">
      <div className="px-[6%] mb-[6%] mt-20 container mx-auto text-[#0F111F] p-4 space-y-[10%] ">
        <div className="space-y-[5%]">
          <h2 className="text-4xl font-semibold mb-2 tracking-wide w-fit">
            <hr className="w-16 h-1 bg-black" />
            <span className="font-bold ">OUR EVENTS</span>
            <div className="flex justify-end font-bold">
              <hr className="w-16 h-1 bg-black" />
            </div>
          </h2>
          {loading ? (
            <div className="flex justify-center items-center h-screen">
              <Image src={loader} alt="Loading" />
            </div>
          ) : eventsData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
              {eventsData.map((event, index) => (
                <EditCard
                  key={event.eventID}
                  title={event.title}
                  description={event.description}
                  date={event.date}
                  regLink={event.regLink}
                  image={event.image}
                  gallery={event.gallery}
                  eventID={event.eventID}
                  isActive={event.isActive}
                />
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center h-screen">
              <p className="text-4xl font-semibold text-gray-600">
                More Events coming soon!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default withAuth(AdminEventsPage);
