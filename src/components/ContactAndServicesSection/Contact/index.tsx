import Box from "@mui/material/Box";
import Form from "./Form";
import Heading from "./Heading";
import SendButton from "./SendButton";

const Contact = () => {
  return (
    <Box padding="1rem" id="contact">
      <Heading />
      <Form />
      <SendButton />
    </Box>
  );
};

export default Contact;
