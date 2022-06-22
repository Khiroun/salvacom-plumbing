import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";
const Form = () => {
  return (
    <Box marginTop="1rem">
      <StyledTextField
        fullWidth
        label="NOM ET PRENOM"
        style={{
          color: "#ccc",
        }}
        required
      />
      <StyledTextField
        fullWidth
        label="EMAIL"
        style={{
          color: "#ccc",
        }}
        required
      />
      <StyledTextField
        fullWidth
        label="TELEPHONE"
        style={{
          color: "#ccc",
        }}
        required
      />
      <StyledTextField
        fullWidth
        label="MESSAGE"
        style={{
          color: "#ccc",
        }}
        required
        multiline
        rows={4}
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
`;
