import { FC } from "react";
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { BsArrowRightShort } from "react-icons/bs";
type Props = {
  service: {
    [x: string]: string;
  };
};
const ServiceItem: FC<Props> = ({ service }) => {
  console.log({ service });
  const description =
    service.description.length > 200
      ? service.description.slice(0, 200) + "..."
      : service.description;
  return (
    <Grid item md={3}>
      <Container>
        <ServiceImage src={service.imageUrl} />
        <ServiceCard>
          <Typography
            variant="h2"
            fontSize="20px"
            fontWeight="600"
            textAlign="center"
            color="#153250"
            fontFamily="Open Sans"
            marginBottom="20px"
          >
            {service.name}
          </Typography>
          <Typography
            variant="body1"
            color="#7e8a96"
            fontSize="16px"
            fontWeight="400"
            marginBottom="1.6em"
          >
            {description}
          </Typography>
          <Button
            endIcon={<BsArrowRightShort />}
            href={`/services/${service.id}`}
          >
            Lire la suite
          </Button>
        </ServiceCard>
      </Container>
    </Grid>
  );
};
const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;
const ServiceImage = styled.img`
  max-width: 100%;
`;
const ServiceCard = styled.div`
  width: 60%;
  position: absolute;
  padding: 2em;
  top: 50%;
  background: white;
`;
export default ServiceItem;
