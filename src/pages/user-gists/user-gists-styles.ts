import styled from "styled-components";
import { iceBlue } from "../../components/shared-components/app-theme";


export const UserGistsMainDiv = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: row;
  border-bottom: 1px solid lightgrey;
  `;
  
  export const UserInfoSide = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding-top: 50px;
  flex-direction: column;
  border-right: 1px solid lightgrey;
  `;
  
export const UserGistsSide = styled.div`
  padding: 10px;
  display: flex;
  flex: 2;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledUserAvatar = styled.img`
  margin: 20px;
  width: 200px;
  height: 200px;
  border-radius: 150px;
`;

export const StyledUserName = styled.div`
  margin: 20px;
  font-size: 20px;
  font-weight: 600;
  color: grey;
`;

export const StyledUserProfileButton = styled.div`
  margin: 10px;
  background: white;
  color: ${iceBlue};
  padding: 5px 30px;
  border-radius: 10px;
  border: 1px solid lightgrey;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const GistListContainer = styled.div`
  display: flex;
  width: 100%;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  &:hover {
    transform: scale(1.01);
    background: rgb(240, 240, 240);
  }
`;

export const GistSwitchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const StyledSwitchText = styled.div`
  margin: 20px;
  font-size: 14px;
  color: grey;
`;
