import {styled, Avatar, TextField } from '@mui/material';

export const StyledAvatar = styled(Avatar)({
  margin: '20px',
  width: '50px',
  height: '50px',
});

export const StyledHeaderView = styled('div')(() => `
  margin: 0;
  width: 100vw;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #5acba1;
  position: sticky;
  top: 0;
  z-index: 1;
`);

export const RightAreaDiv = styled('span')(() => `
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 5vw;
`
);

export const StyledLogoText = styled('span')(() => `
  font-size: xx-large;
  font-weight: bold;
  padding-left: 5vw;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  &:hover {
    opacity: 75%;
    transform: scale(1.1);
  }
`
);

export const StyledTextfieldContainer = styled('div')({
  width: '400px',
});

export const TextFieldStyled = styled(TextField)(() => `
  p {
    color: white;
  }
  .MuiInputBase-input {
    color: white;
    height: 15px;
  }
  label {
    color: white;
  }
  .Mui-focused {
    color: white !important;
    border-color: white !important;
  }
  fieldset {
    border-color: white;
  }
  .Mui-focused fieldset {
    border-color: white !important;
  }
  svg {
    color: white;
  }
  &:hover {
    fieldset {
      border-color: white !important;
    }
  }
`
); 