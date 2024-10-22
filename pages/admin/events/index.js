import React, { useState, useEffect } from "react";
import axios from "axios";
import EditCard from "@/components/Events/EditCard";
import Image from "next/image";
import loader from "@/public/loader.svg";
import withAuth from "@/components/Auth/withAuth";
import AddEventModal from "@/components/Events/AddEventModal";

const AdminEventsPage = () => {
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("/api/v1/events");
      setEventsData(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching events:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents(); // Initial fetch of events
  }, []);

  const handleAddEvent = async (newEvent) => {
    try {
      const response = await axios.post("/api/v1/events", newEvent);
      setIsModalOpen(false);
      fetchEvents(); // Refetch events after adding
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  const handleEventUpdate = async () => {
    fetchEvents(); // Refetch events after an update
  };

  return (
    <div className="bg-[#EBEBEB] overflow-y-hidden min-h-screen">
      <div className="px-[6%] mb-[6%] mt-20 container mx-auto text-[#0F111F] p-4 space-y-[10%] ">
        <div className="space-y-[5%]">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-4xl font-semibold tracking-wide w-fit">
              <hr className="w-16 h-1 bg-black" />
              <span className="font-bold">OUR EVENTS</span>
            </h2>
            <button
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
              onClick={() => setIsModalOpen(true)}
            >
              Add New Event
            </button>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-screen">
              <Image src={loader} alt="Loading" />
            </div>
          ) : eventsData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
              {eventsData.map((event) => (
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
                  onEventUpdate={handleEventUpdate} // Trigger refetch after edit
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

          {isModalOpen && (
            <AddEventModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onSubmit={handleAddEvent}
              initialFormData={{
                title: "",
                description: "",
                date: "",
                regLink: "",
                image: "",
                gallery: [],
                isActive: true,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default withAuth(AdminEventsPage);
