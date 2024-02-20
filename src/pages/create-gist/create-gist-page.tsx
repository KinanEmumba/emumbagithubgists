import { useContext, useState } from "react";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useCreateGist } from "../../apis/apis";
import {
  CreateGistsButtonsContainer,
  CreateGistsInputsContainer,
  CreateGistsMainDiv,
  CreateGistsStyledButtons,
  LoaderContainer,
  StyledInputField
} from "./create-gists-styles";
import { AuthContext } from "../../App";

const CreateGist = () => {
  const contextValue = useContext(AuthContext);
  const user = contextValue?.user;
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [description, setDescription] = useState('');
  const [fileName, setFileName] = useState('');
  const [fileData, setFileData] = useState('');

  const onCreation = async () => {
    await queryClient.invalidateQueries({ queryKey: ['userGists', 'starredGists'] });
    navigate('/usergists', {state: {user, starred: false}})
  };

  const createGist = useCreateGist({
    description: description,
    files: { [fileName]: {content: fileData} },
    onCreation: onCreation
  });

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