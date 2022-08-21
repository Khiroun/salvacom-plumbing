import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import config from "../../siteConfig.json";
import Commander from "./Commander";
const TopSection = () => {
  return (
    <Wrapper id="top-section">
      <Overlay />
      <Content>
        <Left>
          <LeftInner>
            <HeadingWrapper>
              <HeadingContainer>
                <Heading>
                  Solutions de plomberie Depuis plus de 10 ans !
                </Heading>
              </HeadingContainer>
            </HeadingWrapper>
            <SubHeadingWrapper>
              <SubHeadingContainer>
                <SubHeading>
                  Chez Siana DZ, nous nous engageons à trouver la bonne solution
                  pour votre maison ou votre entreprise.
                </SubHeading>
              </SubHeadingContainer>
            </SubHeadingWrapper>
            <ContactButtonWrapper>
              <ContactButtonContainer>
                <ContactButton href={`tel:${config.telephone}`}>
                  Appelez nous
                </ContactButton>
              </ContactButtonContainer>
            </ContactButtonWrapper>
          </LeftInner>
        </Left>
        <Right>
          <Commander />
        </Right>
      </Content>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background-image: url("/plumber-installing-new-pipes.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
  margin-top: -40px;
  margin-bottom: 0px;
  padding: 220px 0px 180px 0px;
  --widgets-spacing: 20px;
  position: relative;
  @media (max-width: 768px) {
    padding: 110px 0px 90px 0px;
  }
`;
const Overlay = styled.div`
  background-color: #000000;
  opacity: 0.56;
  transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
`;
const Content = styled.div`
  max-width: 1140px;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
export default TopSection;

const Left = styled.div`
  width: 52.981%;
  --widgets-spacing: 20px;
  position: relative;
  display: flex;
  @media (max-width: 768px) {
    width: 90%;
    margin: auto;
  }
`;
const LeftInner = styled.div`
  align-content: center;
  align-items: center;
  padding: 10px;
  display: flex;
  position: relative;
  width: 100%;
  flex-wrap: wrap;
`;
const fadeInLeft = keyframes`
 0% { transform: translateX(-100%); opacity: 0 }
 100% {transform: translateX(0); opacity: 1} 
`;

const fadeInRight = keyframes`
 0% { transform: translateX(100%); opacity: 0 }
 100% {transform: translateX(0); opacity: 1}
 
`;
const HeadingWrapper = styled.div`
  margin-bottom: 20px;
  animation-duration: 2s;
  width: 100%;
  animation-name: ${fadeInLeft};
  //animation-iteration-count: infinite;
  --widgets-spacing: 20px;
  position: relative;
`;
const HeadingContainer = styled.div`
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s,
    -webkit-box-shadow 0.3s;
`;
const Heading = styled.h1`
  color: #ffffff;
  font-family: "Archivo", Sans-serif;
  font-size: 56px;
  font-weight: 600;
  line-height: 1.1em;
  margin: 0;
  padding: 0;
  clear: both;
  border: 0;
  outline: 0;
  vertical-align: baseline;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 40px;
  }
`;
const SubHeadingWrapper = styled.div`
  text-align: left;
  color: #ffffff;
  font-family: Sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5em;
  margin-bottom: 20px;
  animation-duration: 2s;
  animation-name: ${fadeInRight};
`;
const SubHeadingContainer = styled.div`
  padding: 0px 40px 0px 0px;
`;
const SubHeading = styled.p`
  margin-bottom: 1.6em;
`;
const ContactButtonWrapper = styled.div`
  animation-duration: 2s;
  width: 100%;
  animation-name: ${fadeInLeft};
`;
const ContactButtonContainer = styled.div`
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s,
    -webkit-box-shadow 0.3s;
`;
const ContactButton = styled.a`
  font-family: Sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1em;
  fill: #ffffff;
  color: #ffffff;
  border-radius: 0px 0px 0px 0px;
  padding: 20px 40px 20px 40px;
  text-decoration: none;
  background-color: #153250;
  border-style: solid;
  border-width: 0px 0px 0px 0px;
`;

const Right = styled.div`
  width: 45.981%;
  --widgets-spacing: 20px;
  position: relative;
  display: flex;
  @media (max-width: 768px) {
    width: inherit;
  }
`;
