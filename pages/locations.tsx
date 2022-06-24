import Head from "next/head";
import { Footer, Navbar } from "../src/components";
import LocationsMap from "../src/components/LocationsMap";

const locations = () => {
  return (
    <div>
      <Head>
        <title>Nos Sites</title>
      </Head>
      <Navbar />
      <LocationsMap />
      <Footer />
    </div>
  );
};

export default locations;
