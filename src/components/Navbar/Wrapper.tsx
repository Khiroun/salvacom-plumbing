import { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
type Props = {
  children?: JSX.Element | JSX.Element[];
};
const Wrapper: FC<Props> = ({ children }) => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>{children}</Toolbar>
      </Container>
    </AppBar>
  );
};

export default Wrapper;
