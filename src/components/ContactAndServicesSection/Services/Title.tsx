import styled from "@emotion/styled";
const Title = () => {
  return (
    <StyledTitle>
      Les services de plomberie et de nettoyage des canalisations sont
      disponibles 24 heures sur 24, 7 jours sur 7.
    </StyledTitle>
  );
};
const StyledTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  font-family: "Open Sans";
  font-weight: 600;
  position: relative;
  display: flex;
  justify-content: center;
  &:before {
    background: #02baf2;
    content: "";
    position: absolute;
    bottom: -8px;
    width: 120px;
    height: 2px;
    transition: 0.3s;
  }
`;
export default Title;
