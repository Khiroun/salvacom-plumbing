import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { getAll } from "../../../firebase";
import Step1 from "./Step1";
import Heading from "./Heading";
import { validateEmail, validateName, validatePhone } from "../../../utils";
import Step2 from "./Step2";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [services, setServices] = useState([]);
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  useEffect(() => {
    getAll("services").then((data) => {
      setServices(data);
    });
  }, []);
  const nextButtonClicked = () => {
    step <= 3 && setStep((s) => s + 1);
  };
  const renderSendButton = () => {
    const step1Valid =
      validateName(name) && validatePhone(phone) && validateEmail(email);
    const step2Valid = selectedService !== "";
    const disabled = (step === 1 && !step1Valid) || (step === 2 && !step2Valid);
    return (
      <Button
        variant="contained"
        size="large"
        disabled={disabled}
        onClick={nextButtonClicked}
      >
        {step === 3 ? "ENVOYER" : "SUIVANT"}
      </Button>
    );
  };
  return (
    <Box padding="1rem" id="contact">
      <Heading />
      {step === 1 && (
        <Step1
          name={name}
          phone={phone}
          email={email}
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
        />
      )}
      {step === 2 && (
        <Step2
          services={services}
          selectedService={selectedService}
          setSelectedService={setSelectedService}
        />
      )}
      {renderSendButton()}
    </Box>
  );
};

export default Contact;
