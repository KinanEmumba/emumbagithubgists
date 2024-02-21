import styled from "styled-components";
import useFileFetcher from "../../apis/file-fetcher";
import { useCallback } from "react";
import { CircularProgress } from "@mui/material";

export const StyledIndex = styled.span`
  color: grey;
  font-size: 12px;
  min-width: 30px;
  max-width: 30px;
`;

export const StyledCodeLine = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: black;
  word-wrap: break-word;
  width: auto;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  height: 100%;
`;

export const CodeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 5px;
`;


const CodeView = ({
  fileURI = ''
}: {
  fileURI: string | undefined,
}) => {
  const {fileData} : {fileData: string| undefined} = useFileFetcher({fileURI});

  const textFileMaker = useCallback((fileData: string) => {
    const textArray = fileData?.split('\n');
    const cleanedTextArray = textArray?.filter(line => line !== '');
    return cleanedTextArray?.map((line, index) => {
      return (
        <CodeContainer key={fileURI + index}>
          <StyledIndex>{index}</StyledIndex>
          <StyledCodeLine>{line}</StyledCodeLine>
        </CodeContainer>
      );
    });
  }, [fileURI])

  const fileDataMaker = () => {
    return textFileMaker(
      typeof fileData === 'string' ?
        fileData :
        JSON.stringify(fileData)
      );
  };

  return (
    <FlexColumn>
      {fileData ? fileDataMaker() : <CircularProgress /> }
    </FlexColumn>
  )
}

export default CodeView