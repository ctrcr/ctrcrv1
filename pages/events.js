import React, { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import Card from "@/components/Events/Card";
import Image from "next/image";
import loader from "@/public/loader.svg";
import { generateEventSchema, generateBreadcrumbSchema } from "@/utils/seoHelpers";

const EventsPage = () => {
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/v1/events");
        setEventsData(response.data.data.filter((event) => event.isActive));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Generate dynamic SEO data
  const eventTitles = eventsData.map(event => event.title).join(', ');
  const upcomingEvents = eventsData.filter(event => new Date(event.date) > new Date()).length;
  const totalEvents = eventsData.length;

  return (
    <>
      <Head>
        <title>Events - CTRCR</title>
        <meta 
          name="description" 
          content={`Discover ${totalEvents} professional events including conferences, workshops, and seminars on corporate law and commercial regulations. ${upcomingEvents} upcoming events available for registration.`} 
        />
        <meta 
          name="keywords" 
          content={`corporate law events, legal conferences, CTRCR events, commercial regulations workshops, legal seminars, ${eventTitles}, law school events`}
        />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Events - CTRCR | Corporate Law Conferences & Workshops" />
        <meta 
          property="og:description" 
          content={`Join our ${totalEvents} professional events on corporate law and commercial regulations`} 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ctrcr.com/events" />
        <meta property="og:image" content="https://www.ctrcr.com/ctrcr_logo.png" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Events - CTRCR" />
        <meta 
          name="twitter:description" 
          content={`Professional events on corporate law and commercial regulations`} 
        />
        <meta name="twitter:image" content="https://www.ctrcr.com/ctrcr_logo.png" />
        
        {/* Structured Data for Events */}
        {eventsData.length > 0 && (
          <script 
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ItemList",
                "itemListElement": eventsData.map((event, index) => ({
                  "@type": "ListItem",
                  "position": index + 1,
                  "item": generateEventSchema(event)
                }))
              })
            }}
          />
        )}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateBreadcrumbSchema([
              { name: 'Home', url: 'https://www.ctrcr.com' },
              { name: 'Events', url: 'https://www.ctrcr.com/events' }
            ]))
          }}
        />
      </Head>
      
      <div className=" overflow-y-hidden min-h-screen">
      <div className="px-[6%] mb-[6%] mt-20 container mx-auto text-[#0F111F] p-4 space-y-[10%] ">
        <div className="space-y-[5%]">
          <div className="flex my-12">
            <h2 className="text-5xl font-semibold mb-2 tracking-wide w-fit">
              <hr className="w-16 h-1 bg-black" />
              <span className="font-bold ">OUR EVENTS</span>
              <div className={"flex justify-end  font-bold"}>
                <hr className="w-16 h-1 bg-black " />
              </div>
            </h2>
          </div>
          {loading ? (
            <div className="flex justify-center items-center h-screen">
              <Image src={loader} alt="Loading" />
            </div>
          ) : eventsData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
              {eventsData.map((event, index) => (
                <Card
                  key={index}
                  image={event.image}
                  title={event.title}
                  description={event.description}
                  date={event.date}
                  regLink={event.regLink}
                  gallery={event.gallery}
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
    </>
  );
};

export default EventsPage;
