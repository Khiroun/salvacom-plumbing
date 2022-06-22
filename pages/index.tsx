import Head from "next/head";
import {
  Navbar,
  Hero,
  DescriptionSection,
  ContactAndServicesSection,
  Footer,
} from "../src/components";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar />
      <Hero />
      <DescriptionSection />
      <ContactAndServicesSection />
      <Footer />
    </div>
  );
}
