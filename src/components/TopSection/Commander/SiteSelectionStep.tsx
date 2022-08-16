import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { FC } from "react";
import { ReactBingmaps } from "react-bingmaps";
import Heading from "./Heading";
import { useTheme } from "@mui/material";
type Props = {
  locations: any[];
  selectedLoc: string;
  setSelectedLoc: (id: string) => void;
};
const SiteSelectionStep: FC<Props> = ({
  locations,
  selectedLoc,
  setSelectedLoc,
}) => {
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
                <Box key={loc.id}>
                  <LocItem
                    onClick={() => setSelectedLoc(loc.id)}
                    style={{
                      backgroundColor:
                        loc.id === selectedLoc
                          ? theme.palette.primary.main
                          : "",
                      color: loc.id === selectedLoc ? "white" : "#333",
                    }}
                  >
                    {loc.siteName}
                  </LocItem>
                </Box>
              );
              /*return (
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
              );*/
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
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid var(--mapBg);
  padding: 2%;
  margin-top: 1%;
  max-height: 380px;
  overflow-x: auto;
  border-radius: 9px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.05);
  color: #333;
  width: 40%;
`;
const LocItem = styled.button`
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
`;
const Container = styled(Box)`
  min-width: 45vw;
  margin-bottom: 1em;
`;

export default SiteSelectionStep;
