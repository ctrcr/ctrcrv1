import React from "react";

const GuideLines = () => {
  return (
    <div className="mt-16 max-sm:mt-12 grid">
      <div className="relative">
        <div className="absolute top-0 left-0 w-3/5 h-full flex items-center">
          <div className="h-0.5 w-full bg-black"></div>
          <div className="w-2 h-2 bg-black rounded-full"></div>
        </div>
        <div className="mt-8 absolute top-0 right-0 w-3/5 h-full flex items-center justify-end">
          <div className="w-2 h-2 bg-black rounded-full"></div>
          <div className="h-0.5 w-full bg-black"></div>
        </div>
      </div>

      <div className="flex max-md:flex-col py-8 md:flex-row justify-center items-center gap-10 px-4 lg:px-16 mb-12">
        <div className="w-1/2 max-md:w-[90%]">
          <h1 className="text-2xl font-bold p-4 text-black text-center mt-8 mb-4 uppercase">
            Submission Guidelines
          </h1>
          <iframe
            src="https://ik.imagekit.io/ctrcr/PDF/Submission%20Guidelines%20-%20clcr%20vol%201%20issue%202%20.pdf?updatedAt=1712670524099"
            className="h-[900px] max-md:h-[400px] mx-auto"
            width="90%"
          ></iframe>
        </div>
        <div className="w-1/2 max-md:w-[90%]">
          <h1 className="text-2xl font-bold p-4 text-black text-center mt-8 mb-4 uppercase">
            Style Guides
          </h1>
          <iframe
            src="https://ik.imagekit.io/ctrcr/PDF/style%20guide.pdf?updatedAt=1712670864523"
            className="h-[900px] max-md:h-[400px] mx-auto"
            width="90%"
          ></iframe>
        </div>
      </div>
      {/* <div className="py-6 text-black mx-12 sm:mx-32 mb-12">
        <p>{title}</p>
        <p>{description}</p>
        <h2 className="mt-6 font-bold">{themes.title}</h2>
        <p>{themes.content}</p>

        <h2 className="mt-6 font-bold">{content.title}</h2>
        <p>{content.content}</p>

        <h2 className="mt-6 font-bold">{word_limit.title}</h2>
        <p>{word_limit.content}</p>

        <h2 className="mt-6 font-bold">{submission_process.title}</h2>
        <p>{submission_process.content}</p>

        <h2 className="mt-6 font-bold">{cross_publication.title}</h2>
        <p>{cross_publication.content}</p>
      </div> */}
    </div>
  );
};

export default GuideLines;
