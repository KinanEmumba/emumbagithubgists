import {styled, Avatar, TextField } from '@mui/material';

export const StyledAvatar = styled(Avatar)({
  margin: '20px',
  width: '50px',
  height: '50px',
});

export const StyledHeaderView = styled('div')({
  margin: 0,
  padding: '10px',
  width: '100vw',
  height: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  backgroundColor: '#5acba1',
  position: 'absolute',
});

export const StyledLoginButton = styled('span')(() => `
  margin: 0 10px;
  padding: 10px 30px;
  background-color: white;
  color: #5acba1;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    opacity: 75%;
  }
`
);

export const StyledLogoText = styled('span')(() => `
  font-size: xx-large;
  cursor: pointer;
  &:hover {
    opacity: 75%;
  }
`
);

export const RightAreaDiv = styled('span')(() => `
  display: flex;
  flex-direction: row;
  align-items: center;
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