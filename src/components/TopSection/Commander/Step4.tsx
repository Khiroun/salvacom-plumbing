import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FC } from "react";
import { ReactBingmaps } from "react-bingmaps";
import Heading from "./Heading";
import { useTheme } from "@mui/material";
type Props = {
  locations: any[];
  selectedLoc: string;
  setSelectedLoc: (id: string) => void;
};
const Step4: FC<Props> = ({ locations, selectedLoc, setSelectedLoc }) => {
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
  const theme = useTheme();
  return (
    <>
      <Heading text="Séléctionnez un site" />
      <Container
        sx={{
          aspectRatio: "1",
          width: "100%",
          position: "relative",
        }}
      >
        <LocationList>
          <>
            {locations.map((loc) => {
              return (
                <MenuItem
                  key={loc.id}
                  onClick={() => setSelectedLoc(loc.id)}
                  sx={{
                    color: loc.id === selectedLoc ? "white" : "",
                    backgroundColor:
                      loc.id === selectedLoc ? theme.palette.primary.main : "",
                  }}
                >
                  {loc.siteName}
                </MenuItem>
              );
            })}
          </>
        </LocationList>
        <ReactBingmaps
          bingmapKey="Anx4mwLDKI3uWURZVzqDwyAy5SMpfR6Co1jd-NC2XkbkOHSgfZyiJrKvQlIEAcmN"
          center={[36.716, 3.003]}
          pushPins={pushPins}
          zoom={10}
        ></ReactBingmaps>
      </Container>
    </>
  );
};
const LocationList = styled(Paper)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;
const Container = styled(Box)`
  min-width: 45vw;
  margin-bottom: 1em;
`;

export default Step4;
