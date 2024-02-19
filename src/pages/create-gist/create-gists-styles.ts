import styled from "styled-components";
import { styled as muiStyled, TextField } from "@mui/material";
import { themeColor } from "../../components/shared-components/app-theme";

export const CreateGistsMainDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CreateGistsInputsContainer = styled.div`
  width: 80vw;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const CreateGistsButtonsContainer = styled.div`
  width: 150px;
  flex-direction: column;
  display: flex;
`;
export const CreateGistsStyledButtons = styled.button`
  background: ${themeColor};
  margin-bottom: 10px;
`;

export const LoaderContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledInputField = muiStyled(TextField)(() => `
  margin-bottom: 40px;
  p {
    color: grey;
  }
  .MuiInputBase-input {
    color: grey;
    height: 15px;
  }
  label {
    color: grey;
  }
  .Mui-focused {
    color: grey !important;
    border-color: grey !important;
  }
  fieldset {
    border-color: grey;
  }
  .Mui-focused fieldset {
    border-color: grey !important;
  }
  svg {
    color: grey;
  }
  &:hover {
    fieldset {
      border-color: grey !important;
    }
  }
`
); 