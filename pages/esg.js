// pages/esg.js

import React from "react";
import Head from "next/head";

const EsgPage = () => {
  return (
    <div>
      <Head>
        <title>ESG Page</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
        />
      </Head>

      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mt-8">ESG Page</h1>
        <p className="mt-4">Welcome to the ESG page!</p>
      </div>
    </div>
  );
};

export default EsgPage;
