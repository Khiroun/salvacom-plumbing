import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { ReactBingmaps } from "react-bingmaps";
import { getAll } from "../../firebase";

const LocationsSection = () => {
  const [pushPins, setPushPins] = useState([]);
  useEffect(() => {
    getAll("sites").then((locs) => {
      console.log({ locs });
      const pushPins = [];
      locs.forEach((loc) => {
        pushPins.push({
          location: [loc.latitude, loc.longitude],
          option: { color: "red" },
        });
      });
      setPushPins(pushPins);
    });
  }, []);
  console.log({ pushPins });
  return (
    <Container>
      <Typography variant="h1" textAlign="center" color="#153250">
        Nos Sites
      </Typography>
      <Box height="80vh">
        {pushPins.length === 0 ? null : (
          <ReactBingmaps
            bingmapKey="Anx4mwLDKI3uWURZVzqDwyAy5SMpfR6Co1jd-NC2XkbkOHSgfZyiJrKvQlIEAcmN"
            center={[36.716, 3.003]}
            pushPins={pushPins}
            zoom={10}
          ></ReactBingmaps>
        )}
      </Box>
    </Container>
  );
};

export default LocationsSection;
