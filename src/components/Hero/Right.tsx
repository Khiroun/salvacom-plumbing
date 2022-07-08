import styled from "@emotion/styled";
import config from "../../siteConfig.json";
const Right = () => {
  return (
    <Wrapper>
      <Image src={config.section1.image} alt="" />
    </Wrapper>
  );
};
const Wrapper = styled.picture`
  opacity: 1;
  transform: none;
  width: 50%;
  transition: opacity 1.5s ease 0.25s, transform 1.5s ease 0.25s;
  position: relative;
  display: block;
  margin-right: 12%;
  &::after {
    padding-bottom: 100%;
    content: "";
    display: block;
    width: 100%;
  }
`;
const Image = styled.img`
  border-width: 1.667rem;
  border-style: solid;
  border-color: #153250;
  object-fit: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: block;
  filter: none;
  -webkit-filter: none;
  transition: filter 0.3s ease 0.3s;
  max-width: 100%;
`;
export default Right;
