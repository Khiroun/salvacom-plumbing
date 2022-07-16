import { FC } from "react";
import Heading from "../Heading";
import ServiceList from "./ServiceList";
type Props = {
  services: any[];
  selectedService: string;
  setSelectedService: (id: string) => void;
};
const Step2: FC<Props> = ({
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

export default Step2;
