import {styled} from 'styled-components';
import { iceBlue } from '../shared-components/app-theme';

export const FullContainer = styled('div')(() => `
  height: 600px;
  display: flex;
  flex-direction: column;
`);

export const InnerContainer = styled('div')(() => `
  width: 90vw;
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

export const StyledUsername = styled.div`
  font-size: 14;
  color: ${iceBlue};
`;

export const StyledFilename = styled.div`
  font-size: 14;
  font-weight: bold;
  color: ${iceBlue};
`;

export const StyledDate = styled.div`
  font-size: 10;
  color: grey;
`;


