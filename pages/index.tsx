import dynamic from "next/dynamic";
import Head from "next/head";
import {
  Navbar,
  Hero,
  DescriptionSection,
  ContactAndServicesSection,
  Footer,
} from "../src/components";
import TopSection from "../src/components/TopSection";
import config from "../src/siteConfig.json";
const LocationsSection = dynamic(
  () => import("../src/components/LocationsSection"),
  {
    ssr: false,
  }
);
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
      <Hero />
      <DescriptionSection />
      <ContactAndServicesSection />
      <Footer />
    </div>
  );
}
