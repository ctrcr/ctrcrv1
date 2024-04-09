import React from "react";

const GuideLines = () => {
  const submissionGuidelinesURL =
    "https://ik.imagekit.io/ctrcr/PDF/Submission%20Guidelines%20-%20clcr%20vol%201%20issue%202%20.pdf?updatedAt=1712670524099";
  const styleGuideURL =
    "https://ik.imagekit.io/ctrcr/PDF/style%20guide.pdf?updatedAt=1712670864523";

  return (
    <div className="flex max-md:flex-col max-md:gap-4 my-16 max-sm:mt-12 ">
      <div className="mx-auto">
        <a
          href={submissionGuidelinesURL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          View Submission Guidelines
        </a>
      </div>

      <div className="mx-auto">
        <a
          href={styleGuideURL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          View Style Guide
        </a>
      </div>
    </div>
  );
};

export default GuideLines;
