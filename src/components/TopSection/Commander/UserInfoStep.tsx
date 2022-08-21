import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";
import { FC } from "react";
import { validateEmail, validateName, validatePhone } from "../../../utils";
import Heading from "./Heading";

type Props = {
  name: string;
  phone: string;
  address: string;
  setName: (x: string) => void;
  setPhone: (x: string) => void;
  setAddress: (x: string) => void;
};

const Form: FC<Props> = ({
  name,
  phone,
  address,
  setName,
  setPhone,
  setAddress,
}) => {
  const nameValid = validateName(name);
  const phoneValid = validatePhone(phone);
  return (
    <>
      <Heading />
      <Box marginTop="1rem" className="user-info-step">
        <StyledTextField
          fullWidth
          label="NOM ET PRENOM"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={!nameValid && name !== ""}
        />
        <StyledTextField
          fullWidth
          label="Adresse"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          type="text"
        />
        <StyledTextField
          fullWidth
          label="TELEPHONE"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="tel"
          error={!phoneValid && phone !== ""}
        />
      </Box>
    </>
  );
};

export default Form;
const StyledTextField = styled(TextField)`
  border-color: #ccc;
  label {
    color: #222;
    font-weight: 500;
    span {
      color: red;
    }
  }

  margin-bottom: 1rem;
  input {
    color: #222;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 0.5em;
  }
`;
