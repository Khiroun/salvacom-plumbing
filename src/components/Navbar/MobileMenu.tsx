import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import { HiMenuAlt2 as MenuIcon } from "react-icons/hi";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { FC, MouseEvent, useState } from "react";
import { useRouter } from "next/router";
type Props = {
  menuItems: any[];
};
const MobileMenu: FC<Props> = ({ menuItems }) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const router = useRouter();
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  return (
    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {menuItems.map((item) => (
          <MenuItem
            key={item.name}
            onClick={() => {
              handleCloseNavMenu();
              router.push(item.link);
            }}
          >
            <Typography textAlign="center">{item.name}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default MobileMenu;
