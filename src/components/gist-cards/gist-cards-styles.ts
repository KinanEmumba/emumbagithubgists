import {styled} from '@mui/material';

export const FullContainer = styled('div')(() => `
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
`);

export const InnerContainer = styled('div')(() => `
  width: 60vw;
  height: 1280px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`);

export const TruncatedDiv = styled('div')(() => `
  text-overflow: ellipsis;
  white-space: wrap; 
`);

export const FlexRow = styled('div')(() => `
  width: auto;
  display: flex;
  flex-direction: 'row';
`);
