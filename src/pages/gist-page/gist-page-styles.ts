import styled from "styled-components";
import { iceBlue } from "../../components/shared-components/app-theme";

export const MainDiv = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 20px;
`;
  
  export const FileInfoArea = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;
`;

export const GistOptions = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;
`;

export const StyledGistOptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  color: ${iceBlue};
  fontSize: 12px;
  `;
  
  export const OptionContainer = styled.div`
  margin-right: 15px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const CardTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${iceBlue};
`;