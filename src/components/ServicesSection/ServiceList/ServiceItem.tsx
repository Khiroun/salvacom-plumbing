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
  const descriptionMaxLenght = 150;
  const description =
    service.description.length > descriptionMaxLenght
      ? service.description.slice(0, descriptionMaxLenght) + "..."
      : service.description;
  return (
    <StyledGrid item md={4} sm={6} xs={12} lg={3}>
      <Container>
        <ServiceImage src={service.imageUrl || "/plumbing-logo.png"} />
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
    </StyledGrid>
  );
};
const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;
const ServiceImage = styled.img`
  width: 100%;
`;
const ServiceCard = styled.div`
  width: 60%;
  position: absolute;
  padding: 2em;
  top: 50%;
  background: white;
`;
const StyledGrid = styled(Grid)`
  @media (max-width: 768px) {
    min-height: 80vh;
  }
`;
export default ServiceItem;
