import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { useGetServices } from "../../../hooks";
import CircularProgress from "@mui/material/CircularProgress";
const ServiceList = () => {
  const serviceList = [
    "Service 1",
    "Service 2",
    "Service 3",
    "Service 4",
    "Service 5",
    "Service 6",
  ];
  const { getServices, loading, services } = useGetServices();
  useEffect(() => {
    getServices();
  }, []);
  console.log({ services });
  if (loading) return <CircularProgress />;
  return (
    <StyledServiceList>
      {services.map((service) => {
        return <li key={service.id}>{service.name}</li>;
      })}
    </StyledServiceList>
  );
};
const StyledServiceList = styled.ul`
  width: 100%;
  li {
    color: #02baf2;
    margin-bottom: 0.5rem;
    font-family: "Open Sans";
  }
`;
export default ServiceList;
