import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { useGetServices } from "../../../hooks";
import CircularProgress from "@mui/material/CircularProgress";
const ServiceList = () => {
  const { getServices, loading, services } = useGetServices();
  useEffect(() => {
    getServices();
  }, []);
  if (loading) return <CircularProgress />;
  return (
    <StyledServiceList>
      {services.map((service) => {
        return (
          <li key={service.id}>
            <a href={`/services/${service.id}`}>{service.name}</a>
          </li>
        );
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
