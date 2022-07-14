import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { FC } from "react";
import Heading from "./Heading";
type Props = {
  subServices: any[];
  selectedSubService: string;
  setSelectedSubService: (id: string) => void;
};
const Step3: FC<Props> = ({
  subServices,
  selectedSubService,
  setSelectedSubService,
}) => {
  return (
    <>
      <Heading text="Séléctionnez un service" />
      <Grid
        container
        sx={{
          mb: 2,
        }}
        spacing={5}
      >
        {subServices.map((subService) => {
          return (
            <Grid key={subService.name} item md={6} sm={12} xs={12}>
              <Card
                sx={{
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 2,
                  flexDirection: "column",
                }}
                onClick={() => {
                  setSelectedSubService(subService.name);
                }}
                active={selectedSubService === subService.name}
              >
                <ServiceName
                  textAlign="center"
                  fontSize="1.5em"
                  active={selectedSubService === subService.name}
                >
                  {subService.name}
                </ServiceName>
                <Box>
                  <Typography>
                    {subService.price[0]}da - {subService.price[1]}da
                  </Typography>
                </Box>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Step3;

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
