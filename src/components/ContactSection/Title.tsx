import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";

const Title = () => {
  return (
    <StyledTitle variant="h2" color="#fff" textAlign="center">
      CONTACTEZ NOUS
    </StyledTitle>
  );
};

const StyledTitle = styled(Typography)`
  @media (max-width: 768px) {
    font-size: 2em;
    text-align: center;
  }
`;
export default Title;
