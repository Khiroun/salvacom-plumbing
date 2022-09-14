import Typography from "@mui/material/Typography";
import { FC } from "react";
type Props = {
  estimatedPrice: number;
};
const EstimatedPrice: FC<Props> = ({ estimatedPrice }) => {
  return (
    <Typography variant="h4" color="#fff">
      Prix estimé: {estimatedPrice},00 da
    </Typography>
  );
};

export default EstimatedPrice;
