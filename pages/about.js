import Head from "next/head";
import ContactForm from "@/components/Home/Form/ContactForm";
import { generateBreadcrumbSchema, generateOrganizationSchema } from "@/utils/seoHelpers";

const About = () => {
  return (
    <>
      <Head>
        <title>About CTRCR - Center for Training and Research in Commercial Regulations | Contact Us</title>
        <meta 
          name="description" 
          content="Learn about CTRCR, the premier center for corporate law and commercial regulations research at Maharashtra National Law University Mumbai. Contact us for inquiries about our programs, research, and events." 
        />
        <meta 
          name="keywords" 
          content="about CTRCR, contact CTRCR, corporate law center, commercial regulations research, MNLU Mumbai, legal education center, corporate law training, contact information"
        />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="About CTRCR - Corporate Law & Commercial Regulations Center" />
        <meta 
          property="og:description" 
          content="Premier center for corporate law and commercial regulations research at MNLU Mumbai"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ctrcr.com/about" />
        <meta property="og:image" content="https://www.ctrcr.com/ctrcr_logo.png" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About CTRCR - Contact Us" />
        <meta 
          name="twitter:description" 
          content="Premier center for corporate law and commercial regulations research"
        />
        <meta name="twitter:image" content="https://www.ctrcr.com/ctrcr_logo.png" />
        
        {/* Structured Data */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema())
          }}
        />
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateBreadcrumbSchema([
              { name: 'Home', url: 'https://www.ctrcr.com' },
              { name: 'About', url: 'https://www.ctrcr.com/about' }
            ]))
          }}
        />
      </Head>
      
      <section className=" flex items-center justify-center text-white text-2xl max-lg:min-h-[65vh]">
      <div className=" w-[80vw] flex overflow-hidden  items-center justify-center">
        <img src="boxframehorizontal.svg" className="h-full hidden xl:block" />
        <div className="h-screen xl:h-0"></div>

        <div className="text-black overflow-hidden absolute flex gap-[5vw]">
          <ContactForm />

          <div className="hidden lg:block">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.738987415271!2d72.91266857520641!3d19.11910318209439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7ee945fd769%3A0x9d653864cdd43e39!2sMaharashtra%20National%20Law%20University%20Mumbai!5e0!3m2!1sen!2sin!4v1709800789414!5m2!1sen!2sin"
              width="400"
              height="500"
              style={{ border: "0" }}
              allowfullscreen="true"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;
