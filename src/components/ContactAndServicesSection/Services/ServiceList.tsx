import React from "react";
import styled from "@emotion/styled";
const ServiceList = () => {
  const serviceList = [
    "Service 1",
    "Service 2",
    "Service 3",
    "Service 4",
    "Service 5",

    "Service 6",
  ];
  return (
    <StyledServiceList>
      {serviceList.map((service) => {
        return <li key={service}>{service}</li>;
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
