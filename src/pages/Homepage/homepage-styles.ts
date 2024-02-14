import {styled } from '@mui/material';

export const StyledInnerView = styled('div')(() => `
  margin-top: 120px;
  display: flex;
  align-items: center;
  flex-direction: column;
`
);
export const StyledViewSelectionContainer = styled('div')(() => `
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`
);
export const StyledVerticalDivider = styled('div')(() => `
  width: 2px;
  height: 35px;
  background: whitesmoke;
  margin-top: 0px;
`
);