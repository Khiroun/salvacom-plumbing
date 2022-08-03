import Typography from "@mui/material/Typography";

const MobileLogo = () => {
  return (
    <Typography
      variant="h5"
      noWrap
      component="a"
      href=""
      sx={{
        mr: 2,
        display: { xs: "flex", md: "none" },
        flexGrow: 1,
        textDecoration: "none",
        justifyContent: "center",
      }}
    >
      <img
        src="/logo3.png"
        style={{
          maxWidth: "30%",
        }}
      />
    </Typography>
  );
};

export default MobileLogo;
