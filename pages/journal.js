import React from "react";

//Components
import JournalSlider from "../components/Journal/JournalSlider";
import GuideLines from "@/components/Journal/GuideLines";

const JournalPage = () => {
  return (
    <div className="bg-white h-screen overflow-y-scroll">
      <h1 className="text-2xl font-bold p-4 text-black text-center uppercase">
        My Journal
      </h1>
      {/* Slider */}
      <div>
        <JournalSlider />
      </div>
      <div>
        <GuideLines />
      </div>
    </div>
  );
};

export default JournalPage;
