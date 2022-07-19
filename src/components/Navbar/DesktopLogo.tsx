import Typography from "@mui/material/Typography";
const DesktopLogo = () => {
  return (
    <Typography
      variant="h6"
      noWrap
      component="a"
      href="/"
      sx={{
        mr: 2,
        display: { xs: "none", md: "flex" },
        textDecoration: "none",
        width: "100px",
        mt: 1,
      }}
    >
      <img
        src="/logo1.jpg"
        style={{
          maxWidth: "100%",
        }}
      />
    </Typography>
  );
};

export default DesktopLogo;
