import { FC } from "react";
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

type Props = {
  services: any[];
  selectedService: string;
  setSelectedService: (id: string) => void;
};

const ServiceList: FC<Props> = ({
  services,
  selectedService,
  setSelectedService,
}) => {
  return (
    <Grid
      container
      sx={{
        mb: 2,
      }}
      spacing={5}
    >
      {services.map((service) => {
        if (!service.subServices) return null;
        return (
          <Grid key={service.id} item md={6} sm={12} xs={12}>
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
  );
};

export default ServiceList;
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
