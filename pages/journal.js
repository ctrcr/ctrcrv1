import React from "react";

const JournalPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Journal</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow-md">
          <h2 className="text-lg font-semibold mb-2">Entry 1</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="bg-white p-4 shadow-md">
          <h2 className="text-lg font-semibold mb-2">Entry 2</h2>
          <p className="text-gray-700">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="bg-white p-4 shadow-md">
          <h2 className="text-lg font-semibold mb-2">Entry 3</h2>
          <p className="text-gray-700">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JournalPage;
