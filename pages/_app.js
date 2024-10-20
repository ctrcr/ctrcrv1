import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar/NavbarDweb";
import Head from "next/head";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          Center for Training and Research in Commercial Regulations | MNLU
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Center for Training and Research in Commercial Regulations, Maharashtra National Law University, Mumbai"
        />
        <meta
          name="keywords"
          content="Center for Training and Research in Commercial Regulations, Maharashtra National Law University, Mumbai"
        />
        <meta
          name="author"
          content="Center for Training and Research in Commercial Regulations, Maharashtra National Law University, Mumbai"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
