import styled from "@emotion/styled";
import config from "../../siteConfig.json";
const Title = () => {
  return <StyledTitle>{config.section3.heading}</StyledTitle>;
};
const StyledTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  font-family: "Open Sans";
  font-weight: 600;
  position: relative;
  display: flex;
  justify-content: center;
  &:before {
    background: #02baf2;
    content: "";
    position: absolute;
    bottom: -8px;
    width: 120px;
    height: 2px;
    transition: 0.3s;
  }
`;
export default Title;
