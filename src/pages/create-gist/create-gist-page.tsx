import { useState } from "react";
import { CircularProgress } from "@mui/material";
import { useCreateGist } from "../../apis/apis";
import {
  CreateGistsButtonsContainer,
  CreateGistsInputsContainer,
  CreateGistsMainDiv,
  CreateGistsStyledButtons,
  LoaderContainer,
  StyledInputField
} from "./create-gists-styles";

const CreateGist = () => {
  const [description, setDescription] = useState('');
  const [fileName, setFileName] = useState('');
  const [fileData, setFileData] = useState('');

  const createGist = useCreateGist({
    description: description,
    files: { [fileName]: {content: fileData} }
  });

  console.log('createGist.data', createGist.data);

  const callMutation = async () => {
    createGist.mutate();
  }
  
  const addFile = () => {
    
  }

  return (
    <CreateGistsMainDiv>
      {createGist.isPending && <LoaderContainer>
        <CircularProgress />
      </LoaderContainer>}
      <CreateGistsInputsContainer>
        <StyledInputField
          label={'Enter gist description'}
          variant={'outlined'}
          onChange={e => setDescription(e.target.value)}
        />
        <StyledInputField
          label={'Enter file name'}
          variant={'outlined'}
          onChange={e => setFileName(e.target.value)}
        />
        <StyledInputField
          label={'Enter file content'}
          variant={'outlined'}
          onChange={e => setFileData(e.target.value)}
          multiline
          rows={8}
        />
        <CreateGistsButtonsContainer>
          <CreateGistsStyledButtons onClick={() => addFile()}>{'Add file'}</CreateGistsStyledButtons>
          <CreateGistsStyledButtons onClick={() => callMutation()}>{'Create Gist'}</CreateGistsStyledButtons>
        </CreateGistsButtonsContainer>
      </CreateGistsInputsContainer>
    </CreateGistsMainDiv>
  )
}

export default CreateGist