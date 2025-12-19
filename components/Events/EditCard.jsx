import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import { TbCalendarTime } from "react-icons/tb";
import EditEventModal from "@/components/Events/EditEventModal";

const EditCard = ({
  title,
  description,
  date,
  regLink,
  image,
  gallery,
  eventID,
  isActive,
  onEventUpdate,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(true);
  const [galleryLoading, setGalleryLoading] = useState(true);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const formatDate = (dateString) => {
    const dateObject = new Date(dateString);
    return dateObject.toLocaleDateString();
  };

  const handleMouseEnter = () => {
    if (gallery && gallery.length > 0) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleImageLoad = () => {
    setLoading(false);
  };

  const handleGalleryImageLoad = () => {
    setGalleryLoading(false);
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Event Image */}
      <div className="w-full h-64 rounded-t-lg relative">
        {loading && (
          <div className="absolute inset-0 flex justify-center items-center">
            <img src="/loader.svg" alt="Loading..." className="w-12 h-12" />
          </div>
        )}
        {!isHovered || !gallery || gallery.length === 0 ? (
          <img
            src={image}
            alt="Event"
            className={`w-full h-64 object-cover rounded-t-lg ${
              loading ? "hidden" : ""
            }`}
            onLoad={handleImageLoad}
          />
        ) : (
          <Swiper
            slidesPerView={1}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
          >
            {gallery.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-64">
                  {galleryLoading && (
                    <div className="absolute inset-0 flex justify-center items-center">
                      <img
                        src="/loader.svg"
                        alt="Loading..."
                        className="w-12 h-12"
                      />
                    </div>
                  )}
                  <img
                    src={img}
                    alt={`Gallery image ${index + 1}`}
                    className={`w-full h-64 object-cover rounded-t-lg ${
                      galleryLoading ? "hidden" : ""
                    }`}
                    onLoad={handleGalleryImageLoad}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
      <div className="py-4 px-6">
        {/* Event Details */}
        <h2 className="text-lg font-semibold text-[#0F111F] leading-none mb-5">
          {title}
        </h2>
        <p className="text-[#677685] leading-none text-base line-clamp-2">
          {description}
        </p>
        <div className={`flex text-[#4C555D] mt-10 border-t-2 py-2 text-xs ${regLink && regLink.trim() !== '' ? 'justify-between' : 'justify-start'}`}>
          <span className="flex items-center gap-1">
            <TbCalendarTime size={20} />
            {formatDate(date)}
          </span>
          {regLink && regLink.trim() !== '' ? (
            <span className="flex items-center gap-1 bg-blue-400 py-2 px-4 text-white rounded-full hover:underline cursor-pointer">
              <a
                href={regLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                Link
              </a>
            </span>
          ) : (
            <span className="flex items-center gap-1 py-2 px-4 text-red-500 font-semibold">
              No Link
            </span>
          )}
        </div>
        <div className="text-gray-500">{eventID}</div>
        <div className="text-red-500">{isActive ? "Active" : "Inactive"}</div>
        {/* Edit Event Button */}
        <button
          className="bg-green-500 text-white py-2 px-4 rounded mt-4 hover:bg-green-700"
          onClick={() => setIsEditModalOpen(true)}
        >
          Edit Event
        </button>
        {/* Edit Event Modal */}
        {isEditModalOpen && (
          <EditEventModal
            isOpen={isEditModalOpen}
            onClose={() => setIsEditModalOpen(false)}
            initialFormData={{
              title,
              description,
              date,
              regLink,
              image,
              gallery,
              eventID,
              isActive,
            }}
            onEventUpdate={onEventUpdate}
          />
        )}
      </div>
    </div>
  );
};

export default EditCard;
