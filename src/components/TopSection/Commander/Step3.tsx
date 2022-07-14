import Box from "@mui/material/Box";
import { FC } from "react";
import { ReactBingmaps } from "react-bingmaps";
type Props = {
  locations: any[];
  selectedLoc: string;
  setSelectedLoc: (id: string) => void;
};
const Step3: FC<Props> = ({ locations, selectedLoc, setSelectedLoc }) => {
  const pushPins = [];
  locations.forEach((loc) => {
    pushPins.push({
      location: [loc.latitude, loc.longitude],
      option: { color: loc.id === selectedLoc ? "green" : "red" },
      addHandler: {
        type: "click",
        callback: () => {
          setSelectedLoc(loc.id);
        },
      },
    });
  });

  return (
    <Box
      sx={{
        aspectRatio: "1",
      }}
    >
      <ReactBingmaps
        bingmapKey="Anx4mwLDKI3uWURZVzqDwyAy5SMpfR6Co1jd-NC2XkbkOHSgfZyiJrKvQlIEAcmN"
        center={[36.716, 3.003]}
        pushPins={pushPins}
        zoom={10}
      ></ReactBingmaps>
    </Box>
  );
};

export default Step3;
