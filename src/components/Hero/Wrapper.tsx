import styled from "@emotion/styled";
import { FC } from "react";
type Props = {
  children?: JSX.Element | JSX.Element[];
};
const Wrapper: FC<Props> = ({ children }) => {
  return (
    <Section>
      <Outer>
        <Inner>{children}</Inner>
      </Outer>
    </Section>
  );
};

export default Wrapper;
const Section = styled.section`
  position: relative;
  overflow: hidden;
  color: #153250;
  padding-bottom: calc(
    (50 * 1px) + (109 - 50) * ((100vw - 320px) / (1920 - 320))
  );
  margin-top: 1rem;
`;
const Outer = styled.div`
  max-width: calc(
    91.111rem + calc((20 * 1px) + (109 - 20) * ((100vw - 320px) / (1920 - 320))) *
      2
  );
  width: 100%;
  margin: 0 auto;
  position: relative;
  padding-left: calc(
    (20 * 1px) + (109 - 20) * ((100vw - 320px) / (1920 - 320))
  );
  padding-right: calc(
    (20 * 1px) + (109 - 20) * ((100vw - 320px) / (1920 - 320))
  );
`;
const Inner = styled.div`
  align-items: center;
  align-content: space-around;
  display: flex;
`;
