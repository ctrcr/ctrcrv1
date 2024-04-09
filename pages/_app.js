import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar/NavbarDweb";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
