import Grid from "@mui/material/Grid";
import Services from "./Services";
const ContactAndServicesSection = () => {
  return (
    <Grid container>
      <Grid item md={12} sm={12} lg={12}>
        <Services />
      </Grid>
    </Grid>
  );
};

export default ContactAndServicesSection;
