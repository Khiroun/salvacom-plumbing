import styled from "@emotion/styled";
import { useTheme } from "@mui/material";
import { FC } from "react";

type Props = {
  subServices: any[];
  selectSubService: (subService) => void;
  isSelectedSubService: (subService) => boolean;
};

const SubServiceList: FC<Props> = ({
  subServices,
  selectSubService,
  isSelectedSubService,
}) => {
  const theme = useTheme();
  return (
    <StyledSubServiceList>
      {subServices.map((subService) => {
        return (
          <SubServiceItem
            style={{
              backgroundColor: isSelectedSubService(subService)
                ? theme.palette.primary.light
                : "white",
              color: isSelectedSubService(subService) ? "white" : "black",
            }}
            onClick={() => selectSubService(subService)}
          >
            {subService.name}
            <span>
              {subService.price[0]}da-{subService.price[1]}da
            </span>
            <span onClick={() => selectSubService(subService)}>
              {isSelectedSubService(subService) ? "-" : "+"}
            </span>
          </SubServiceItem>
        );
      })}
    </StyledSubServiceList>
  );
};

export default SubServiceList;

const StyledSubServiceList = styled.div`
  overflow: hidden;
  color: #222;
  font-size: 1.3em;
  font-weight: 400;
  border-radius: 0 0 5px 5px;
  width: 98%;
  margin: auto;
  margin-top: -1%;
  margin-bottom: 2%;
  transition-property: opacity, left, top, height;
  transition-duration: 3s, 5s;
`;
const SubServiceItem = styled.div`
  background-color: #fff;
  font-size: 0.8em;
  line-height: 1em;
  border-radius: 9px;
  margin: auto;
  margin-top: 1%;
  width: 80%;
  display: flex;
  text-align: left;
  padding: 18px;
  cursor: pointer;
  padding-bottom: 30px;
  border: 1px solid #e6e4e0;
  justify-content: space-between;
`;
