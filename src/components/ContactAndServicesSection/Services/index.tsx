import styled from "@emotion/styled";
import CallButton from "./CallButton";
import ServiceList from "./ServiceList";
import Title from "./Title";
import Text from "./Text";

const Services = () => {
  return (
    <Container id="services">
      <Title />

      <Text />
      <ServiceList />
      <CallButton />
    </Container>
  );
};

export default Services;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
`;
