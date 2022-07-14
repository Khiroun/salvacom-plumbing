import styled from "@emotion/styled";
import { Box, Paper, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import { FC } from "react";
import Heading from "./Heading";
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
  const theme = useTheme();
  return (
    <>
      <Heading text="Séléctionnez un service" />
      <Grid container sx={{ mb: 2 }} spacing={5}>
        {services.map((service) => {
          return (
            <Grid key={service.id} item md={6} sm={6}>
              <Card
                sx={{
                  aspectRatio: "1",
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
    </>
  );
};

export default Step2;

const Card = styled(Box)<{ active: boolean }>`
  background-color: ${({ active }) => (active ? "#153250" : "white")};
  transition: all 0.3s ease-in;
`;
const ServiceName = styled(Typography)<{ active: boolean }>`
  color: ${({ active }) => (active ? "white" : "#153250")};
  transition: all 0.3s ease-in;
`;
