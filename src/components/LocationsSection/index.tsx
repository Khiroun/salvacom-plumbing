import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Content from "./Content";

const LocationsSection = () => {
  return (
    <Container id="locations">
      <Typography variant="h1" textAlign="center" color="#153250">
        Nos Sites
      </Typography>
      <Content />
    </Container>
  );
};

export default LocationsSection;
