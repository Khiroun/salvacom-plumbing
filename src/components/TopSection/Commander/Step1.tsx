import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";
import { FC } from "react";
import { validateEmail, validateName, validatePhone } from "../../../utils";

type Props = {
  name: string;
  phone: string;
  email: string;
  setName: (x: string) => void;
  setPhone: (x: string) => void;
  setEmail: (x: string) => void;
};

const Form: FC<Props> = ({
  name,
  phone,
  email,
  setName,
  setPhone,
  setEmail,
}) => {
  const nameValid = validateName(name);
  const emailValid = validateEmail(email);
  const phoneValid = validatePhone(phone);
  return (
    <Box marginTop="1rem">
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
        label="EMAIL"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        error={!emailValid && email !== ""}
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
  );
};

export default Form;
const StyledTextField = styled(TextField)`
  border-color: #ccc;
  label {
    color: #ccc;
    span {
      color: red;
    }
  }
  margin-bottom: 1rem;
  input {
    color: #fff;
  }
`;
