import Typography from "@mui/material/Typography";
import { FC } from "react";
type Props = {
  text?: string;
};
const Heading: FC<Props> = ({ text }) => {
  return (
    <Typography
      variant="h2"
      color="#ccc"
      textAlign="center"
      fontFamily="Open Sans"
    >
      {text ? text : "Commander"}
    </Typography>
  );
};

export default Heading;
