import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { useGetServices } from "../../../hooks";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import ServiceItem from "./ServiceItem";
const ServiceList = () => {
  const { getServices, loading, services } = useGetServices();
  useEffect(() => {
    getServices();
  }, []);
  if (loading) return <CircularProgress />;
  return (
    <StyledServiceList container spacing={3}>
      {services.map((service) => {
        return <ServiceItem key={service.id} service={service} />;
      })}
    </StyledServiceList>
  );
};
const StyledServiceList = styled(Grid)`
  width: 100%;
  min-height: 80vh;
`;
export default ServiceList;
