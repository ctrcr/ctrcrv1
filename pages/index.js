import Head from "next/head";
import Hero from "@/components/Home/Hero";
import { generateBreadcrumbSchema, generateOrganizationSchema } from "@/utils/seoHelpers";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>CTRCR - Center for Training and Research in Commercial Regulations | Corporate Law Hub</title>
        <meta 
          name="description" 
          content="CTRCR is a leading center for training and research in corporate law, commercial regulations, and legal education at Maharashtra National Law University Mumbai. Explore our blog, events, journal, and expert team." 
        />
        <meta 
          name="keywords" 
          content="CTRCR, corporate law, commercial regulations, legal education, Maharashtra National Law University, MNLU Mumbai, legal research, corporate law blog, legal events, law journal"
        />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="CTRCR - Center for Training and Research in Commercial Regulations" />
        <meta 
          property="og:description" 
          content="Leading center for corporate law, commercial regulations, and legal education at MNLU Mumbai"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ctrcr.com" />
        <meta property="og:image" content="https://www.ctrcr.com/ctrcr_logo.png" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CTRCR - Corporate Law & Commercial Regulations" />
        <meta 
          name="twitter:description" 
          content="Leading center for corporate law and commercial regulations research"
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
              { name: 'Home', url: 'https://www.ctrcr.com' }
            ]))
          }}
        />
      </Head>
      
      <main className="overflow-hidden min-h-screen max-sm:mt-8">
        <Hero />
      </main>
    </>
  );
};

export default HomePage;