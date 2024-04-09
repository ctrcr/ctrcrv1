import React from "react";

import JournalSlider from "@/components/Journal/JournalSlider";
import GuideLines from "@/components/Journal/GuideLines";

const JournalPage = () => {
  return (
    <div className="min-h-screen pt-16 lg:pt-20 bg-[#EBEBEB]">
      <h1 className="text-center text-5xl text-black font-bold my-4">
        JOURNAL
      </h1>
      <section className="container mx-auto px-4 lg:px-8 lg:py-8 pt-2 grid lg:grid-cols-2 gap-8 lg:gap-20 items-center text-black">
        <div className="text-justify">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4 hidden lg:block">
            About Journal
          </h2>
          <p className="text-sm lg:text-xl mb-6">
            The Journal on Corporate Law and Commercial Regulations, established
            in 2023, is dedicated to advancing research in corporate law and
            commercial regulations. Our goal is to provide a platform for
            scholars, practitioners, and students to share insights and
            expertise.
          </p>
          <p className="text-sm lg:text-xl mb-6">
            Published bi-annually, our journal emphasizes high-quality scholarly
            articles and rigorous peer review. We welcome contributions that
            contribute to the understanding of commercial and corporate laws.
          </p>
          <p className="text-sm lg:text-xl">
            Join us in our mission to promote knowledge and innovation in the
            field. Submit your work and become part of our vibrant community.
          </p>
        </div>
        <div className="rounded-md shadow-md bg-gradient-to-r bg-black text-white p-8 flex flex-col items-center justify-center">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
            Call for Papers
          </h2>
          <p className="text-lg lg:text-xl mb-6">
            Volume I, Issue II is out now! Share your research and insights with
            our global audience. Let your voice be heard.
          </p>
          <a
            href="/"
            className="bg-white text-blue-600 px-6 py-3 rounded-md hover:bg-blue-600 hover:text-white transition duration-300"
          >
            Submit Now
          </a>
        </div>
      </section>
      <div className="flex justify-around"></div>
      <GuideLines />

      <h1 className="text-center text-5xl text-black font-bold my-4 max-lg:mt-8">
        ISSUES
      </h1>
      {/* Slider */}
      <div>
        <JournalSlider />
      </div>
    </div>
  );
};

export default JournalPage;
