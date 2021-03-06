import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { FC } from "react";
type Props = {
  menuItems: any[];
};

const DesktopMenu: FC<Props> = ({ menuItems }) => {
  return (
    <Box
      sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
      justifyContent="center"
    >
      {menuItems.map((item) => (
        <Button
          key={item.name}
          sx={{ my: 2, color: "white", display: "block", mx: 1 }}
        >
          <a href={item.link}>{item.name}</a>
        </Button>
      ))}
    </Box>
  );
};

export default DesktopMenu;
