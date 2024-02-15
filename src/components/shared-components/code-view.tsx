import styled from "styled-components";
import useFileFetcher from "./file-fetcher";

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
  width: 250px;
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
  fileURI
}: {
  fileURI: string,
}) => {
  const {fileData} : {fileData: string} = useFileFetcher({fileURI});
  const textArray = fileData.split('\n');
  const cleanedTextArray = textArray.filter(line => line !== '');

  return (
    <FlexColumn>
      {cleanedTextArray.map((line, index) => {
        return (
          <CodeContainer>
            <StyledIndex>{index}</StyledIndex>
            <StyledCodeLine>{line}</StyledCodeLine>
          </CodeContainer>
        );
      })}
    </FlexColumn>
  )
}

export default CodeView