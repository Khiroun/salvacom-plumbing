import Button from "@mui/material/Button";
import { FiPhoneCall } from "react-icons/fi";
const CallButton = () => {
  return (
    <Button variant="contained" startIcon={<FiPhoneCall />}>
      <a href="tel:0557288711">Appelez nous</a>
    </Button>
  );
};

export default CallButton;
