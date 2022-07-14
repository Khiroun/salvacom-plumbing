import { FC, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import styled from "@emotion/styled";
type Props = {
  children?: JSX.Element | JSX.Element[];
};
const Wrapper: FC<Props> = ({ children }) => {
  const [bgColor, setBgColor] = useState("transparent");
  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setBgColor("#153250");
      }
      if (scrollPosition < 100) {
        setBgColor("transparent");
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <StyledAppBar bg={bgColor} position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>{children}</Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Wrapper;
const StyledAppBar = styled(AppBar)<{ bg: string }>`
  background-color: ${({ bg }) => bg};
  transition: all 0.5s ease-in-out;
`;
