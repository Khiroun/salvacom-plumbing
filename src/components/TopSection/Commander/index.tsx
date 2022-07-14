import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { addDocument, getAll } from "../../../firebase";
import Step1 from "./Step1";
import Heading from "./Heading";
import { validateEmail, validateName, validatePhone } from "../../../utils";
import Step2 from "./Step2";
import dynamic from "next/dynamic";
import { CircularProgress, Typography } from "@mui/material";

const Step3 = dynamic(
  () => {
    return import("./Step3");
  },
  {
    ssr: false,
  }
);

const Commander = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [services, setServices] = useState([]);
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
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
      await addDocument("commandes", {
        name,
        address,
        phone,
        selectedLoc,
        selectedService,
        timestamp: Date(),
      });
      setName("");
      setAddress("");
      setPhone("");
      setSelectedLoc("");
      setSelectedService("");
      setStep(1);
      setSent(true);
      setLoading(false);
    }
  };
  const renderSendButton = () => {
    const step1Valid = validateName(name) && validatePhone(phone);
    const step2Valid = selectedService !== "";
    const step3Valid = selectedLoc !== "";
    const disabled =
      (step === 1 && !step1Valid) ||
      (step === 2 && !step2Valid) ||
      (step === 3 && !step3Valid);
    return (
      <Button
        variant="contained"
        size="large"
        disabled={disabled}
        onClick={nextButtonClicked}
        sx={{
          opacity: 1,
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
        <Step1
          name={name}
          phone={phone}
          address={address}
          setName={setName}
          setPhone={setPhone}
          setAddress={setAddress}
        />
      )}
      {!sent && step === 2 && (
        <Step2
          services={services}
          selectedService={selectedService}
          setSelectedService={setSelectedService}
        />
      )}
      {!sent && step === 3 && (
        <Step3
          locations={locations}
          selectedLoc={selectedLoc}
          setSelectedLoc={setSelectedLoc}
        />
      )}
      {renderSendButton()}
    </Box>
  );
};

export default Commander;
