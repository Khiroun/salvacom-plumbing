import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import { FC } from "react";
type Props = {
  text?: string;
};
const Heading: FC<Props> = ({ text }) => {
  return (
    <StyledHeading
      variant="h2"
      color="#ccc"
      textAlign="center"
      fontFamily="Open Sans"
    >
      {text ? text : "Commander"}
    </StyledHeading>
  );
};
const StyledHeading = styled(Typography)`
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1em;
  }
`;
export default Heading;
