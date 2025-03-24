import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import { TbCalendarTime } from "react-icons/tb";
import { IoClose } from "react-icons/io5";

const Card = ({ image, title, description, date, regLink, gallery }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  return (
    <>
      <div
        className="bg-white rounded-lg shadow-md w-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
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
              className={`w-full h-64 object-cover rounded-t-lg ${loading ? "hidden" : ""}`}
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
                    {loading && (
                      <div className="absolute inset-0 flex justify-center items-center">
                        <img src="/loader.svg" alt="Loading..." className="w-12 h-12" />
                      </div>
                    )}
                    <img
                      src={img}
                      alt={`Gallery image ${index + 1}`}
                      className={`w-full h-64 object-cover rounded-t-lg ${loading ? "hidden" : ""}`}
                      onLoad={handleImageLoad}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
        <div className="py-4 px-6">
          <h2 className="text-lg font-semibold text-[#0F111F] leading-none mb-5">{title}</h2>
          <p className="text-[#677685] leading-none text-base line-clamp-2">{description}</p>
          <button
            className="text-blue-500 hover:underline mt-2"
            onClick={() => setIsModalOpen(true)}
          >
            View More
          </button>
          <div className="flex text-[#4C555D] mt-10 border-t-2 py-2 text-xs justify-between">
            <span className="flex items-center gap-1">
              <TbCalendarTime size={20} />
              {formatDate(date)}
            </span>
            <span className="flex items-center gap-1 bg-blue-400 py-2 px-4 text-white rounded-full hover:underline cursor-pointer">
              <a href={regLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                Link
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Modal Pop-up */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 shadow-xl relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setIsModalOpen(false)}
            >
              <IoClose size={24} />
            </button>
            <div className="w-full h-auto flex justify-center">
              <img src={image} alt="Event" className="w-full max-h-[40vh] object-contain rounded-md" />
            </div>
            <h2 className="text-lg font-semibold text-[#0F111F] mt-4">{title}</h2>
            <p className="text-[#677685] text-base mt-2">{description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
