import { TextField, styled } from '@mui/material';

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