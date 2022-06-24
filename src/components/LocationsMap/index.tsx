import Box from "@mui/material/Box";
import BingMapsReact from "bingmaps-react";

const LocationsMap = () => {
  const pushPin = {
    center: {
      latitude: 27.98785,
      longitude: 86.925026,
    },
    options: {},
  };
  const pushPins = [pushPin];

  return (
    <Box minHeight="70vh">
      <BingMapsReact
        bingMapsKey="Anx4mwLDKI3uWURZVzqDwyAy5SMpfR6Co1jd-NC2XkbkOHSgfZyiJrKvQlIEAcmN"
        viewOptions={{ center: { latitude: 27.98785, longitude: 86.925026 } }}
        mapTypeId={"aerial"}
        height="60vh"
        width="100%"
        pushPins={pushPins}
      />
    </Box>
  );
};

export default LocationsMap;
