import { Box, Paper, Typography, useTheme, useThemeProps } from "@mui/material";
import Grid from "@mui/material/Grid";
import { FC } from "react";
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
    <Grid container sx={{ mb: 2 }}>
      {services.map((service) => {
        return (
          <Grid key={service.id} item md={4} sm={4}>
            <Paper
              sx={{ padding: "1rem", width: "100%", position: "relative" }}
              onClick={() => setSelectedService(service.id)}
              style={{
                backgroundColor:
                  service.id === selectedService
                    ? theme.palette.secondary.main
                    : "white",
              }}
            >
              <Box
                position="absolute"
                top="5%"
                left="5%"
                width="90%"
                height="90%"
                bgcolor="rgba(0,0,0,0.2)"
              />
              <Typography
                variant="h5"
                color="white"
                sx={{
                  position: "absolute",
                }}
              >
                {service.name}
              </Typography>
              <img src={service.imageUrl} width="100%" />
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Step2;
