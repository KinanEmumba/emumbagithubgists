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
  min-width: 40px;
  max-width: 100%;
  word-wrap: wrap;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CodeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 2px;
`;


const CodeView = ({
  fileURI
}: {
  fileURI: string,
}) => {
  const {fileData} : {fileData: string} = useFileFetcher({fileURI});
  const textArray = fileData.split('\n');
  const cleanedTextArray = textArray.filter(line => line !== '');
  const slicedTextArray = cleanedTextArray.splice(0,3);

  return (
    <FlexColumn>
      {slicedTextArray.map((line, index) => {
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