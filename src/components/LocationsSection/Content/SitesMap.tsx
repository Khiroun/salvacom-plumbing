import { ReactBingmaps } from "react-bingmaps";
import Grid from "@mui/material/Grid";
import { FC } from "react";

type Props = {
  sites: any[];
};
const SitesMap: FC<Props> = ({ sites }) => {
  const pushPins = sites.map((site) => {
    return {
      location: [site.latitude, site.longitude],
      option: { color: "red" },
    };
  });
  return (
    <Grid item md={9}>
      {pushPins.length === 0 ? null : (
        <ReactBingmaps
          bingmapKey="Anx4mwLDKI3uWURZVzqDwyAy5SMpfR6Co1jd-NC2XkbkOHSgfZyiJrKvQlIEAcmN"
          center={[36.716, 3.003]}
          pushPins={pushPins}
          zoom={10}
        ></ReactBingmaps>
      )}
    </Grid>
  );
};

export default SitesMap;
