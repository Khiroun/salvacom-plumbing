import styled from "@emotion/styled";

import { FC, useState } from "react";
import ServiceItem from "./ServiceItem";
import SubServiceList from "./SubServiceList";

type Props = {
  services: any[];
  selectSubService: (service: any, subService: any) => void;
  selectedService: any;
};

const ServiceListMain: FC<Props> = ({
  services,
  selectSubService,
  selectedService,
}) => {
  const [openServices, setOpenServices] = useState([]);

  return (
    <Wrapper>
      {services.map((service) => {
        if (!service.subServices) return null;
        return (
          <div key={service.id}>
            <ServiceItem
              serviceItemClicked={() => {
                setOpenServices((prev) => {
                  if (prev.includes(service.id)) {
                    return prev.filter((id) => id !== service.id);
                  }
                  return [...prev, service.id];
                });
              }}
              serviceSelected={openServices.includes(service.id)}
              serviceName={service.name}
            />
            {openServices.includes(service.id) && (
              <SubServiceList
                subServices={service.subServices}
                selectSubService={(subService) =>
                  selectSubService(service, subService)
                }
                isSelectedSubService={(subService) =>
                  selectedService.find((item) => item.name === subService.name)
                }
              />
            )}
          </div>
        );
      })}
    </Wrapper>
  );
};

export default ServiceListMain;

const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid #e6e4e0;
  padding: 2%;
  margin-top: 1%;
  max-height: 380px;
  overflow-x: auto;
  border-radius: 9px;
`;
