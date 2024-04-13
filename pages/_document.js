import Document, { Html, Head, Main, NextScript } from "next/document";
import { GoogleFonts } from "next-google-fonts";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <GoogleFonts href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
