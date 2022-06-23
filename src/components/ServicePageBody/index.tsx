import { FC } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
type Props = {
  imageUrl: string;
  description: string;
};
const ServicePageBody: FC<Props> = ({ imageUrl, description }) => {
  return (
    <Grid container padding="2rem" spacing={4} bgcolor="#F2F8F7">
      <Grid item md={6}>
        <img
          src={imageUrl}
          alt=""
          width="100%"
          style={{ objectFit: "cover", maxHeight: "70vh" }}
        />
      </Grid>
      <Grid item md={6} display="flex" alignItems="center">
        <Typography variant="body1" sx={{ color: "#153250" }}>
          {description}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ServicePageBody;
