import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FaFacebookF } from "react-icons/fa";
import config from "../../siteConfig.json";
const Footer = () => {
  return (
    <Box component="footer" padding="1rem" bgcolor="#4b4c4d" marginTop="1rem">
      <Box display="flex" alignItems="center" justifyContent="center">
        <a href={config.facebook}>
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
          Copyright @ 2022 | {config.siteName} | All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
