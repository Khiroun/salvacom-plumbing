import styled from "@emotion/styled";
const Text = () => {
  return (
    <>
      <StyledText>
        Nous reconnaissons que les urgences de plomberie ne surviennent jamais à
        un moment opportun. Notre personnel certifié de plomberie et d'égouts
        basé à Alger est prêt à vous aider avec vos besoins de réparation à
        domicile. Notre équipe est disponible les week-ends et jours fériés pour
        vous assister.
      </StyledText>
      <StyledText>
        Si vous recherchez des services spécifiques, cliquez sur les services
        ci-dessous
      </StyledText>
    </>
  );
};

export default Text;
const StyledText = styled.p`
  color: #666;
  margin-bottom: 20px;
  font-size: 20px;
  font-family: "Open Sans";
  font-weight: 400;
`;
