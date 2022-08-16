import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { getAll } from "../../../firebase";
import UserInfoStep from "./UserInfoStep";
import { validateName, validatePhone } from "../../../utils";
import ServiceSelectionStep from "./ServiceSelectionStep";
import { CircularProgress, Typography } from "@mui/material";
import addOrder from "./addOrder";
import SubServiceSelectionStep from "./SubServiceSelectionStep";
import dynamic from "next/dynamic";

const SiteSelectionStep = dynamic(() => import("./SiteSelectionStep"), {
  ssr: false,
});

const Commander = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [services, setServices] = useState([]);
  const [step, setStep] = useState(2);
  const [selectedService, setSelectedService] = useState("");
  const [selectedSubService, setSelectedSubService] = useState("");
  const [locations, setLocations] = useState([]);
  const [selectedLoc, setSelectedLoc] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const selectedServiceObject = services.find(
    (item) => item.id === selectedService
  );
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
    step < 4 && setStep((s) => s + 1);
    if (step === 4) {
      setLoading(true);
      await addOrder(
        name,
        address,
        phone,
        selectedLoc,
        selectedService,
        selectedSubService
      );
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
    const userInfoStepValid = validateName(name) && validatePhone(phone);
    const serviceSelectionStepValid = selectedService !== "";
    const subServiceSelectionStepValid = selectedSubService !== "";
    const step4Valid = selectedLoc !== "";
    const disabled =
      (step === 1 && !userInfoStepValid) ||
      (step === 2 && !step4Valid) ||
      (step === 3 && !serviceSelectionStepValid);
    step === 4 && !subServiceSelectionStepValid;
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
        {step === 4 ? "ENVOYER" : "SUIVANT"}
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
      {!sent && step === 4 && (
        <SubServiceSelectionStep
          subServices={
            selectedServiceObject ? selectedServiceObject.subServices : []
          }
          selectedSubService={selectedSubService}
          setSelectedSubService={setSelectedSubService}
        />
      )}
      {renderSendButton()}
    </Box>
  );
};

export default Commander;
