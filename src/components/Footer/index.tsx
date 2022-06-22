import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <Box component="footer" padding="1rem" bgcolor="#4b4c4d" marginTop="1rem">
      <Box display="flex" alignItems="center" justifyContent="center">
        <a href="https://www.facebook.com/profile.php?id=100072089822341">
          <FaFacebookF color="#bebdbd" />
        </a>
      </Box>
      <Box>
        <Typography
          variant="caption"
          textAlign="center"
          display="block"
          marginTop="1rem"
        >
          Copyright @ 2022 | KHIROUN | All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
