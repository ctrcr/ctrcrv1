import React from "react";

import JournalSlider from "@/components/Journal/JournalSlider";
import GuideLines from "@/components/Journal/GuideLines";

const JournalPage = () => {
  return (
    <div className="bg-white h-screen overflow-y-scroll pt-20">
      <div>
        <GuideLines />
      </div>
      <h1 className="text-2xl font-bold p-4 text-black text-center uppercase">
        Issues
      </h1>
      {/* Slider */}
      <div>
        <JournalSlider />
      </div>
    </div>
  );
};

export default JournalPage;
