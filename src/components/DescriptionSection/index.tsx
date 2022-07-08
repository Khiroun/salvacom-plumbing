import styled from "@emotion/styled";
import config from "../../siteConfig.json";
const DescriptionSection = () => {
  return (
    <Container>
      <Title>{config.section2.text}</Title>
    </Container>
  );
};
const Container = styled.section`
  background-color: rgba(255, 255, 255, 0);
  background-position: center center;
  background-repeat: no-repeat;
  padding-top: 70px;
  padding-right: 7%;
  padding-bottom: 20px;
  padding-left: 7%;
  border-width: 0px 0px 0px 0px;
  border-color: #eae9e9;
  border-style: solid;
`;
const Title = styled.h1`
  margin: 0;
  color: #4b4949;
  font-size: 2rem;
  line-height: 1.43;
  padding: 0;
  text-align: center;
  font-family: "Open Sans";
  font-weight: 300;
`;
export default DescriptionSection;
