import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { getAll } from "../../../firebase";
import UserInfoStep from "./UserInfoStep";
import { validateName, validatePhone } from "../../../utils";
import ServiceSelectionStep from "./ServiceSelectionStep";
import { Alert, CircularProgress, Typography } from "@mui/material";
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
  const [step1ErrorMessage, setStep1ErrorMessage] = useState("");
  const [step2ErrorMessage, setStep2ErrorMessage] = useState("");
  const [step3ErrorMessage, setStep3ErrorMessage] = useState("");
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
      return;
    }
    if (step === 1 && !validateName(name)) {
      setStep1ErrorMessage("Veuillez entrer un nom valide");
      return;
    }
    if (step === 1 && !validatePhone(phone)) {
      setStep1ErrorMessage("Veuillez entrer un numero de telephone valide");
      return;
    }
    if (step === 1 && !address) {
      setStep1ErrorMessage("Veuillez entrer une adresse");
      return;
    }
    if (step === 2 && !selectedLoc) {
      setStep2ErrorMessage("Veuillez choisir un site");
      return;
    }
    if (step === 3 && !selectedService.length) {
      setStep3ErrorMessage("Veuillez choisir un service");
      return;
    }
    setStep((s) => s + 1);
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
        <>
          {step1ErrorMessage && (
            <Alert severity="error">{step1ErrorMessage}</Alert>
          )}
          <UserInfoStep
            name={name}
            phone={phone}
            address={address}
            setName={setName}
            setPhone={setPhone}
            setAddress={setAddress}
          />
        </>
      )}

      {!sent && step === 2 && (
        <>
          {step2ErrorMessage && (
            <Alert severity="error">{step2ErrorMessage}</Alert>
          )}
          <SiteSelectionStep
            locations={locations}
            selectedLoc={selectedLoc}
            setSelectedLoc={setSelectedLoc}
          />
        </>
      )}
      {!sent && step === 3 && (
        <>
          {step3ErrorMessage && (
            <Alert severity="error">{step3ErrorMessage}</Alert>
          )}
          <ServiceSelectionStep
            services={services}
            selectedService={selectedService}
            setSelectedService={setSelectedService}
          />
        </>
      )}

      {renderSendButton()}
    </Box>
  );
};

export default Commander;
