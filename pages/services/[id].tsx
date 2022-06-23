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
  }, []);
  console.log(service);
  return (
    <div>
      <Navbar />
      <ServicePageHero headingText={service.name} />
      <ServicePageBody
        description={service.description}
        imageUrl={service.imageUrl}
      />
      <Footer />
    </div>
  );
};

export default ServicePage;
