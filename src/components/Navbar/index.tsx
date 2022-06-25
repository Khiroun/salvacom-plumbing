import { useState, MouseEvent } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import { HiMenuAlt2 as MenuIcon } from "react-icons/hi";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Wrapper from "./Wrapper";

const menuItems = [
  {
    name: "Nos services",
    link: "/#services",
  },
  {
    name: "Nos sites",
    link: "/#locations",
  },
  {
    name: "Nous conatcter",
    link: "/#contact",
  },
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Wrapper>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        LOGO
      </Typography>

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
            <MenuItem key={item.name} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{item.name}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>

      <Typography
        variant="h5"
        noWrap
        component="a"
        href=""
        sx={{
          mr: 2,
          display: { xs: "flex", md: "none" },
          flexGrow: 1,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        LOGO
      </Typography>
      <Box
        sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
        justifyContent="center"
      >
        {menuItems.map((item) => (
          <Button
            key={item.name}
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: "white", display: "block", mx: 1 }}
          >
            <a href={item.link}>{item.name}</a>
          </Button>
        ))}
      </Box>
    </Wrapper>
  );
};

export default Navbar;
