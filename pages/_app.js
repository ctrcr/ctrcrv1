import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar/NavbarDweb";
import Head from "next/head";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          CTRCR: Center for Training and Research in Commercial Regulations
        </title>
        <link rel="icon" href="/ctrcr_logo.png" />
        <meta
          name="title"
          content="CTRCR: Center for Training and Research in Commercial Regulations"
        />
        <meta
          name="description"
          content="Center for Training and Research in Commercial Regulations, Maharashtra National Law University, Mumbai"
        />
        <meta
          name="keywords"
          content="Center for Training and Research in Commercial Regulations, Maharashtra National Law University, Mumbai"
        />
        <meta name="author" content="Saransh Sinha" />
        <meta
          property="og:site_name"
          content="Center for Training and Research in Commercial Regulations, Maharashtra National Law University, Mumbai"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ctrcr.com" />
        <link rel="canonical" href="https://ctrcr.com" />

        <meta property="image" content="../public/ctrcr_logo.png" />

        <meta
          property="og:site_name"
          content="Center for Training and Research in Commercial Regulations, Maharashtra National Law University, Mumbai"
        />
        <meta
          property="og:title"
          content="CTRCR: Center for Training and Research in Commercial Regulations"
        />
        <meta
          property="og:description"
          content="Center for Training and Research in Commercial Regulations, Maharashtra National Law University, Mumbai"
        />
        <meta property="og:url" content="https://ctrcr.com" />
        <meta property="og:image" content="/public/ctrcr_logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:see_also" content="https://ctrcr.com" />

        <link rel="canonical" href="https://ctrcr.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
      <Footer />
    </>
  );
}
