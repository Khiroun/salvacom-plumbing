import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { getDocument } from "../../firebase";
const CallButton = () => {
  const [phone, setPhone] = useState("");
  useEffect(() => {
    getDocument("siteSettings", "general-info").then((doc: any) => {
      setPhone(doc.phone);
    });
  }, []);
  return (
    <Button variant="contained" startIcon={<FiPhoneCall />}>
      <a href={`tel:${phone}`}>Appelez nous</a>
    </Button>
  );
};

export default CallButton;
