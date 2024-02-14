import {styled } from '@mui/material';

export const StyledInnerView = styled('div')(() => `
  margin-top: 120px;
  display: flex;
  align-items: center;
  flex-direction: column;
`
);
export const StyledViewSelectionContainer = styled('div')(() => `
  width: 80vw;
  display: flex;
  justify-content: flex-end;
  margin: 20px;
  align-items: center;
`
);
export const StyledVerticalDivider = styled('div')(() => `
  width: 2px;
  height: 30px;
  background: lightgrey;
  margin: 0px 10px;
`
);

export const StyledTableContainer = styled('div')(() => `
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
`
);