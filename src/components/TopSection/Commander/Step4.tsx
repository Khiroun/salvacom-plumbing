import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import { FC } from "react";
import { ReactBingmaps } from "react-bingmaps";
import Heading from "./Heading";
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

  return (
    <>
      <Heading text="Séléctionnez un site" />
      <Container
        sx={{
          aspectRatio: "1",
          width: "100%",
        }}
      >
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
const Container = styled(Box)`
  min-width: 45vw;
  margin-bottom: 1em;
`;

export default Step4;
