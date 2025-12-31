import React, { useState, useEffect } from "react";
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

  // Disable background scroll when modal is open and handle ESC key
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      
      // Handle ESC key to close modal
      const handleEscKey = (event) => {
        if (event.key === 'Escape') {
          setIsModalOpen(false);
        }
      };
      
      document.addEventListener('keydown', handleEscKey);
      
      return () => {
        document.body.style.overflow = 'unset';
        document.removeEventListener('keydown', handleEscKey);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);

  // Close modal when clicking outside
  const handleModalBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
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
          <div className={`flex text-[#4C555D] mt-10 border-t-2 py-2 text-xs ${regLink && regLink.trim() !== '' ? 'justify-between' : 'justify-start'}`}>
            <span className="flex items-center gap-1">
              <TbCalendarTime size={20} />
              {formatDate(date)}
            </span>
            {regLink && regLink.trim() !== '' && (
              <span className="flex items-center gap-1 bg-blue-400 py-2 px-4 text-white rounded-full hover:underline cursor-pointer">
                <a href={regLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                  Link
                </a>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Modal Pop-up */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
          onClick={handleModalBackdropClick}
        >
          <div className="bg-white rounded-lg w-full max-w-lg md:max-w-2xl lg:max-w-3xl max-h-[90vh] shadow-xl relative">
            {/* Fixed Close Button */}
            <button
              className="fixed top-4 right-4 text-gray-500 hover:text-gray-700 z-50 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors"
              onClick={() => setIsModalOpen(false)}
            >
              <IoClose size={20} />
            </button>
            {/* Scrollable Content */}
            <div className="max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6">
              <div className="w-full h-auto flex justify-center mb-4">
                <img src={image} alt="Event" className="w-full max-h-[50vh] sm:max-h-[40vh] object-contain rounded-md" />
              </div>
              <h2 className="text-lg sm:text-xl font-semibold text-[#0F111F] mb-3">{title}</h2>
              <p className="text-[#677685] text-sm sm:text-base leading-relaxed mb-4">{description}</p>
              <div className={`flex flex-col sm:flex-row text-[#4C555D] pt-4 border-t-2 text-sm gap-3 sm:gap-0 ${regLink && regLink.trim() !== '' ? 'sm:justify-between' : 'sm:justify-start'}`}>
                <span className="flex items-center gap-2">
                  <TbCalendarTime size={18} />
                  <span className="text-xs sm:text-sm">{formatDate(date)}</span>
                </span>
                {regLink && regLink.trim() !== '' && (
                  <span className="flex items-center justify-center gap-1 bg-blue-400 py-2 px-4 text-white rounded-full hover:bg-blue-500 transition-colors cursor-pointer">
                    <a href={regLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs sm:text-sm">
                      Registration Link
                    </a>
                  </span>
                                 )}
               </div>
             </div>
             </div>
           </div>
         </div>
       )}
    </>
  );
};

export default Card;
