import { FC } from "react";
import Heading from "../Heading";
import ServiceList from "./ServiceList";
type Props = {
  services: any[];
  selectedService: any[];
  setSelectedService: (id: any[]) => void;
};
const ServiceSelectionStep: FC<Props> = ({
  services,
  selectedService,
  setSelectedService,
}) => {
  return (
    <>
      <Heading text="Séléctionnez un service" />
      <ServiceList
        services={services}
        selectedService={selectedService}
        setSelectedService={setSelectedService}
      />
    </>
  );
};

export default ServiceSelectionStep;
