import Button from "@mui/material/Button";
import { FiPhoneCall } from "react-icons/fi";
import config from "../../siteConfig.json";
const CallButton = () => {
  return (
    <Button variant="contained" startIcon={<FiPhoneCall />}>
      <a href={`tel:${config.telephone}`}>Appelez nous</a>
    </Button>
  );
};

export default CallButton;
