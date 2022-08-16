import { FC, useState } from "react";
import styled from "@emotion/styled";
import { Box, Typography, useTheme } from "@mui/material";

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
  const [openServices, setOpenServices] = useState([]);
  let prixEstime = 0;
  selectedService.forEach((subService) => {
    prixEstime += subService.prix;
  });
  const theme = useTheme();
  return (
    <div>
      <Typography variant="h4" color="#fff">
        Prix estimé: {prixEstime} da
      </Typography>
      <Wrapper>
        {services.map((service) => {
          if (!service.subServices) return null;
          return (
            <div key={service.id}>
              <ServiceItem
                onClick={() => {
                  setOpenServices((prev) => {
                    if (prev.includes(service.id)) {
                      return prev.filter((id) => id !== service.id);
                    }
                    return [...prev, service.id];
                  });
                }}
                style={{
                  backgroundColor: openServices.includes(service.id)
                    ? theme.palette.primary.main
                    : "white",
                  color: openServices.includes(service.id) ? "white" : "#333",
                }}
              >
                {service.name}
                <span
                  style={{
                    position: "absolute",
                    right: "1em",
                    fontWeight: "bold",
                  }}
                >
                  {openServices.includes(service.id) ? "-" : "+"}
                </span>
              </ServiceItem>
              {openServices.includes(service.id) && (
                <SubServiceList>
                  {service.subServices.map((subService) => {
                    console.log(subService);
                    return (
                      <SubServiceItem>
                        {subService.name}
                        <span>
                          {subService.price[0]}da-{subService.price[1]}da
                        </span>
                        <span
                          onClick={() => {
                            setSelectedService((prev) => {
                              if (
                                selectedService.find(
                                  (item) => item.name === subService.name
                                )
                              ) {
                                return prev.filter(
                                  (item) => item.name !== subService.name
                                );
                              }
                              return [
                                ...prev,
                                {
                                  name: subService.name,
                                  service: service.id,
                                  prix:
                                    (subService.price[0] +
                                      subService.price[1]) /
                                    2,
                                },
                              ];
                            });
                          }}
                        >
                          {selectedService.find(
                            (item) => item.name === subService.name
                          )
                            ? "-"
                            : "+"}
                        </span>
                      </SubServiceItem>
                    );
                  })}
                </SubServiceList>
              )}
            </div>
          );
        })}
      </Wrapper>
    </div>
  );
  /*return (
    <Grid
      container
      sx={{
        mb: 2,
        bgcolor: "rgba(255,255,255,0.6);",
      }}
      spacing={1}
    >
      {services.map((service) => {
        if (!service.subServices) return null;
        return (
          <Grid key={service.id} item md={12} sm={12} xs={12}>
            <Card
              sx={{
                p: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 2,
              }}
              onClick={() => {
                setSelectedService(service.id);
              }}
              active={selectedService === service.id}
            >
              <ServiceName
                textAlign="center"
                fontSize="1.5em"
                active={selectedService === service.id}
              >
                {service.name}
              </ServiceName>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );*/
};
const SubServiceList = styled.div`
  overflow: hidden;
  color: #222;
  font-size: 1.3em;
  font-weight: 400;
  border-radius: 0 0 5px 5px;
  width: 98%;
  margin: auto;
  margin-top: -1%;
  margin-bottom: 2%;
  transition-property: opacity, left, top, height;
  transition-duration: 3s, 5s;
`;
const SubServiceItem = styled.div`
  background-color: #fff;
  font-size: 0.8em;
  line-height: 1em;
  border-radius: 9px;
  margin: auto;
  margin-top: 1%;
  width: 80%;
  display: flex;
  text-align: left;
  padding: 18px;
  cursor: pointer;
  padding-bottom: 30px;
  border: 1px solid #e6e4e0;
  justify-content: space-between;
`;

export default ServiceList;
const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid #e6e4e0;
  padding: 2%;
  margin-top: 1%;
  max-height: 380px;
  overflow-x: auto;
  border-radius: 9px;
`;
const ServiceItem = styled.button`
  cursor: pointer;
  padding: 18px;
  width: 100%;
  text-align: left;
  outline: 0;
  border-radius: 9px;
  transition: 0.4s;
  font-size: 1.2em;
  font-weight: 400;
  margin-bottom: 1%;
  border: 1px solid #e6e4e0;
  position: relative;
`;
const Card = styled(Box)<{ active: boolean }>`
  background-color: ${({ active }) => (active ? "#153250" : "white")};
  transition: all 0.3s ease-in;
  @media (max-width: 768px) {
    // width: 100%;
  }
`;
const ServiceName = styled(Typography)<{ active: boolean }>`
  color: ${({ active }) => (active ? "white" : "#153250")};
  transition: all 0.3s ease-in;
`;
