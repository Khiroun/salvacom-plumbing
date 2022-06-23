import styled from "@emotion/styled";
import { FC } from "react";
type Props = {
  headingText: string;
};
const ServicePageHero: FC<Props> = ({ headingText }) => {
  return (
    <Container>
      <ImageBg>
        <img
          src="https://www.gmplumbingcorporation.com/assets/banners/banner-pipes.2201191035563.jpg"
          alt=""
        />
      </ImageBg>
      <ContentWrapper>
        <Content>
          <Left>
            <Heading>{headingText}</Heading>
          </Left>
          <Right></Right>
        </Content>
      </ContentWrapper>
    </Container>
  );
};

export default ServicePageHero;
const Container = styled.section`
  position: relative;
  overflow: hidden;
  background-color: #f2f8f7;
  color: #153250;
  padding-top: calc((50 * 1px) + (109 - 50) * ((100vw - 320px) / (1920 - 320)));
  padding-bottom: calc(
    (50 * 1px) + (109 - 50) * ((100vw - 320px) / (1920 - 320))
  );
`;
const ImageBg = styled.picture`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  display: block;
  img {
    object-fit: cover;
    position: relative;
    left: 50%;
    top: 50%;
    width: auto;
    height: auto;
    min-width: calc(100% + 2px);
    min-height: calc(100% + 2px);
    transform: translate(-50%, -50%);
    pointer-events: none;
    display: block;
    filter: none;
    transition: filter 0.3s ease 0.3s;
    max-width: 100%;
    border: none;
  }
`;
const ContentWrapper = styled.div`
  max-width: calc(
    91.111rem + calc((20 * 1px) + (109 - 20) * ((100vw - 320px) / (1920 - 320))) *
      4
  );
  margin-left: 0;
  padding-left: 0;
  margin: 0 auto;
  position: relative;
  padding-right: calc(
    (20 * 1px) + (109 - 20) * ((100vw - 320px) / (1920 - 320))
  );
`;
const Content = styled.div`
  align-items: stretch;
  align-content: space-around;
  display: flex;
`;
const Left = styled.div`
  color: #f2f8f7;
  display: block;
  width: 50%;
  padding-left: calc(
    (20 * 1px) + (109 - 20) * ((100vw - 320px) / (1920 - 320))
  );
  padding-right: calc(
    calc((20 * 1px) + (109 - 20) * ((100vw - 320px) / (1920 - 320))) * 0.4
  );
  padding-top: calc(
    calc((50 * 1px) + (109 - 50) * ((100vw - 320px) / (1920 - 320))) * 0.6
  );
  padding-bottom: calc(
    calc((50 * 1px) + (109 - 50) * ((100vw - 320px) / (1920 - 320))) * 0.6
  );
  z-index: 1;
  position: relative;
  &::before {
    background-color: #153250;
    color: #f2f8f7;
    opacity: 1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    pointer-events: none;
  }
`;

const Right = styled.div`
  width: 50%;
`;
const Heading = styled.strong`
  color: #f2f8f7;
  font-size: calc(3.333rem * 0.95);
  letter-spacing: -0.03em;
  line-height: 1.24;
  font-weight: 400;
  text-transform: none;
  word-break: break-word;
  display: block;
  font-style: normal;
`;
