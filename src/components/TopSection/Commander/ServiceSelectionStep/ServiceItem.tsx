import styled from "@emotion/styled";
import { useTheme } from "@mui/material";
import { FC } from "react";

type Props = {
  serviceItemClicked: () => void;
  serviceSelected: boolean;
  serviceName: string;
};

const ServiceItem: FC<Props> = ({
  serviceItemClicked,
  serviceSelected,
  serviceName,
}) => {
  const theme = useTheme();
  return (
    <StyledServiceItem
      onClick={serviceItemClicked}
      style={{
        backgroundColor: serviceSelected ? theme.palette.primary.main : "white",
        color: serviceSelected ? "white" : "#333",
      }}
    >
      {serviceName}
      <span
        style={{
          position: "absolute",
          right: "1em",
          fontWeight: "bold",
        }}
      >
        {serviceSelected ? "-" : "+"}
      </span>
    </StyledServiceItem>
  );
};

export default ServiceItem;

const StyledServiceItem = styled.button`
  cursor: pointer;
  padding: 18px;
  width: 100%;
  text-align: left;
  outline: 0;
  border-radius: 9px;
  transition: 0.4s;
  font-size: 1.2em;
  font-weight: 400;
  margin-bottom: 1%;
  border: 1px solid #e6e4e0;
  position: relative;
`;
