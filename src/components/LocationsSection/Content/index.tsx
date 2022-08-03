import Grid from "@mui/material/Grid";

import { useEffect, useState } from "react";
import { getAll } from "../../../firebase";
import Side from "./Side";
import SitesMap from "./SitesMap";
const Content = () => {
  const [sites, setSites] = useState([]);
  useEffect(() => {
    getAll("sites").then((locs) => {
      setSites(locs);
    });
  }, []);

  return (
    <Grid minHeight="80vh" container spacing={1}>
      <Side sites={sites} />
      <SitesMap sites={sites} />
    </Grid>
  );
};

export default Content;
