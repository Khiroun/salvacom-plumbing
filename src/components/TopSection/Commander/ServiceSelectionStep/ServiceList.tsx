import { FC } from "react";
import EstimatedPrice from "./EstimatedPrice";
import ServiceListMain from "./ServiceListMain";

type Props = {
  services: any[];
  selectedService: any[];
  setSelectedService: (id: any) => void;
};

const ServiceList: FC<Props> = ({
  services,
  selectedService,
  setSelectedService,
}) => {
  let prixEstime = 0;
  selectedService.forEach((subService) => {
    prixEstime += subService.prix;
  });
  const selectSubService = (service: any, subService: any) => {
    setSelectedService((prev) => {
      if (selectedService.find((item) => item.name === subService.name)) {
        return prev.filter((item) => item.name !== subService.name);
      }
      return [
        ...prev,
        {
          name: subService.name,
          service: service.id,
          prix: (subService.price[0] + subService.price[1]) / 2,
        },
      ];
    });
  };
  return (
    <div>
      <EstimatedPrice estimatedPrice={prixEstime} />
      <ServiceListMain
        services={services}
        selectSubService={selectSubService}
        selectedService={selectedService}
      />
    </div>
  );
};

export default ServiceList;
