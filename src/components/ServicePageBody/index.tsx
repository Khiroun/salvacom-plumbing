import { FC } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { fontWeight } from "@mui/system";
type Props = {
  imageUrl: string;
  description: string;
  subServices: {
    name: string;
    price: any[];
  }[];
};
const ServicePageBody: FC<Props> = ({ imageUrl, description, subServices }) => {
  return (
    <Grid
      container
      padding="2rem"
      spacing={4}
      bgcolor="#F2F8F7"
      alignItems="center"
    >
      <Grid item md={6}>
        <img
          src={imageUrl}
          alt=""
          width="100%"
          style={{ objectFit: "cover", maxHeight: "70vh" }}
        />
      </Grid>
      <Grid item md={6} display="flex" flexDirection="column">
        <Typography variant="body1" sx={{ color: "#153250" }}>
          {description}
        </Typography>
        <List>
          {subServices.map((subService) => {
            return (
              <ListItem key={subService.name}>
                <ListItemText
                  primary={subService.name}
                  primaryTypographyProps={{
                    fontWeight: "700",
                    fontSize: "1.1em",
                    color: "#153250",
                  }}
                  secondary={`${subService.price[0]} da - ${subService.price[1]} da`}
                />
              </ListItem>
            );
          })}
        </List>
      </Grid>
    </Grid>
  );
};

export default ServicePageBody;
