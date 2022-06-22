import Grid from "@mui/material/Grid";
import Contact from "./Contact";
import Services from "./Services";
const ContactAndServicesSection = () => {
  return (
    <Grid container>
      <Grid item md={6} sm={12} lg={6}>
        <Services />
      </Grid>
      <Grid item md={6} sm={12} lg={6} bgcolor="rgb(44, 49, 55)">
        <Contact />
      </Grid>
    </Grid>
  );
};

export default ContactAndServicesSection;
