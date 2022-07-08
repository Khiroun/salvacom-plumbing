import styled from "@emotion/styled";
import config from "../../siteConfig.json";
const Left = () => {
  return (
    <Wrapper>
      <HeadingWrapper>
        <Heading>
          <HeadingLine1>{config.section1.heading.line1}</HeadingLine1>
          <HeadingLine2>{config.section1.heading.line2}</HeadingLine2>
        </Heading>
      </HeadingWrapper>
      <TextWrapper>
        <TextInner>
          <p>{config.section1.description}</p>
        </TextInner>
      </TextWrapper>
    </Wrapper>
  );
};

export default Left;
const Wrapper = styled.div`
  width: 50%;
  position: relative;
`;

const HeadingWrapper = styled.div`
  opacity: 1;
  transform: none;
  transition: opacity 1.5s ease 0.25s, transform 1.5s ease 0.25s;
`;
const Heading = styled.span`
  font-size: calc(4rem * 0.75);
  letter-spacing: 0;
  line-height: 1.09;
  font-weight: 400;
  text-transform: none;
  word-break: break-word;
  display: block;
  font-style: normal;
  font-family: "DM Serif Display", serif;
`;
const HeadingLine1 = styled.span`
  font-weight: 400;
  display: block;
`;
const HeadingLine2 = styled.strong`
  color: #153250;
  display: block;
`;
const TextWrapper = styled.div`
  width: calc(100% + 8.333rem);
  margin-right: calc(8.333rem * -1);
  color: #f2f8f7;
  display: block;
  opacity: 1;
  transform: none;
  align-items: center;
  justify-content: space-between;
  align-content: space-around;
  transition: opacity 1.5s ease 0.25s, transform 1.5s ease 0.25s;
  margin-top: calc((30 * 1px) + (45 - 30) * ((100vw - 320px) / (1920 - 320)));
  padding-left: calc(
    calc((20 * 1px) + (109 - 20) * ((100vw - 320px) / (1920 - 320))) * 0.6
  );
  padding-right: calc(
    calc((20 * 1px) + (109 - 20) * ((100vw - 320px) / (1920 - 320))) * 0.6
  );
  padding-top: calc(
    calc((50 * 1px) + (109 - 50) * ((100vw - 320px) / (1920 - 320))) * 0.4
  );
  padding-bottom: calc(
    calc((50 * 1px) + (109 - 50) * ((100vw - 320px) / (1920 - 320))) * 0.4
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
const TextInner = styled.div`
  width: 100% !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
  max-width: 100% !important;
  flex: 1 1 auto;
  p {
    font-size: calc(1.222rem * 0.9);
    font-family: "DM Serif Display", serif;
    letter-spacing: 0.02em;
    line-height: 1.9;
    font-weight: 300;
    text-transform: none;
    word-break: break-word;
    display: block;
    font-style: normal;
  }
`;
