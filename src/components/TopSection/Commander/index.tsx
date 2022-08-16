import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { getAll } from "../../../firebase";
import UserInfoStep from "./UserInfoStep";
import { validateName, validatePhone } from "../../../utils";
import ServiceSelectionStep from "./ServiceSelectionStep";
import { CircularProgress, Typography } from "@mui/material";
import addOrder from "./addOrder";

import dynamic from "next/dynamic";

const SiteSelectionStep = dynamic(() => import("./SiteSelectionStep"), {
  ssr: false,
});

const Commander = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [services, setServices] = useState([]);
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState([]);
  const [locations, setLocations] = useState([]);
  const [selectedLoc, setSelectedLoc] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  //Whats the error
  useEffect(() => {
    getAll("sites").then((data) => {
      setLocations(data);
    });
  }, []);
  useEffect(() => {
    getAll("services").then((data) => {
      setServices(data);
    });
  }, []);
  const nextButtonClicked = async () => {
    step < 3 && setStep((s) => s + 1);
    if (step === 3) {
      setLoading(true);
      await addOrder(name, address, phone, selectedLoc, selectedService);
      setName("");
      setAddress("");
      setPhone("");
      setSelectedLoc("");
      setSelectedService([]);
      setStep(1);
      setSent(true);
      setLoading(false);
    }
  };
  const renderSendButton = () => {
    const userInfoStepValid = validateName(name) && validatePhone(phone);
    const serviceSelectionStepValid = selectedService.length > 0;
    const step4Valid = selectedLoc !== "";
    const disabled =
      (step === 1 && !userInfoStepValid) ||
      (step === 2 && !step4Valid) ||
      (step === 3 && !serviceSelectionStepValid);
    return (
      <Button
        variant="contained"
        size="large"
        disabled={disabled}
        onClick={nextButtonClicked}
        sx={{
          opacity: 1,
          display: sent ? "none" : "inhirit",
        }}
      >
        {step === 3 ? "ENVOYER" : "SUIVANT"}
      </Button>
    );
  };
  if (loading) return <CircularProgress size={50} />;
  return (
    <Box padding="1rem" id="contact">
      {sent && (
        <Typography variant="h3" textAlign="center" color="white">
          Votre commande a bien été envoyée
        </Typography>
      )}
      {!sent && step === 1 && (
        <UserInfoStep
          name={name}
          phone={phone}
          address={address}
          setName={setName}
          setPhone={setPhone}
          setAddress={setAddress}
        />
      )}

      {!sent && step === 2 && (
        <SiteSelectionStep
          locations={locations}
          selectedLoc={selectedLoc}
          setSelectedLoc={setSelectedLoc}
        />
      )}
      {!sent && step === 3 && (
        <ServiceSelectionStep
          services={services}
          selectedService={selectedService}
          setSelectedService={setSelectedService}
        />
      )}

      {renderSendButton()}
    </Box>
  );
};

export default Commander;
