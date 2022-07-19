import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Footer, Navbar } from "../../src/components";
import ServicePageBody from "../../src/components/ServicePageBody";
import ServicePageHero from "../../src/components/ServicePageHero";
import useGetService from "../../src/hooks/useGetService";

const ServicePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { getService, service } = useGetService();
  useEffect(() => {
    if (typeof id === "string") getService(id);
  }, [id]);
  const subServices = service.subServices ? service.subServices : [];
  return (
    <div>
      <Head>
        <title>{service.name}</title>
      </Head>
      <Navbar />
      <ServicePageHero headingText={service.name} />
      <ServicePageBody
        description={service.description}
        imageUrl={service.imageUrl}
        subServices={subServices}
      />
      <Footer />
    </div>
  );
};

export default ServicePage;
