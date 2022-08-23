import Head from "next/head";
import {
  Navbar,
  DescriptionSection,
  ServicesSection,
  Footer,
} from "../src/components";
import ContactSection from "../src/components/ContactSection";
import LocationsSection from "../src/components/LocationsSection";
import TopSection from "../src/components/TopSection";
import config from "../src/siteConfig.json";

export default function Home() {
  return (
    <div>
      <Head>
        <title>{config.siteName}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <TopSection />
      <DescriptionSection />
      <ServicesSection />
      <LocationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
