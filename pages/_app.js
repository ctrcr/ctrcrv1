import Footer from "@/components/shared/Footer/Footer";
import NavbarD from "@/components/shared/Navbar/NavbarD";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavbarD />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
