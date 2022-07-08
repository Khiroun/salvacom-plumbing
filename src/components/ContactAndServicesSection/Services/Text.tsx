import styled from "@emotion/styled";
import config from "../../../siteConfig.json";
const Text = () => {
  return (
    <>
      <StyledText>{config.section3.text}</StyledText>
      <StyledText>
        Si vous recherchez des services spécifiques, cliquez sur un des services
        ci-dessous
      </StyledText>
    </>
  );
};

export default Text;
const StyledText = styled.p`
  color: #666;
  margin-bottom: 20px;
  font-size: 20px;
  font-family: "Open Sans";
  font-weight: 400;
`;
