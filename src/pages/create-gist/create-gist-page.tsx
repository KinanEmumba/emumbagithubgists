import { SyntheticEvent, useContext, useRef, useState } from "react";
import { CircularProgress } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useCreateGist, useUpdateGist } from "../../apis/apis";
import {
  CreateGistsButtonsContainer,
  CreateGistsInputsContainer,
  CreateGistsMainDiv,
  CreateGistsStyledButtons,
  LoaderContainer,
  StyledInputField
} from "./create-gists-styles";
import { AuthContext } from "../../App";
import { GistDataType } from "../../types";
import { gistFileURL } from "../../components/shared-components/utils";
import useFileFetcher from "../../apis/file-fetcher";

const CreateGist = () => {
  const location = useLocation();
  const locationState = location?.state;
  const gist: GistDataType = locationState?.gist;
  const {fileURI, filename} = gistFileURL(gist);
  const {fileData: sharedFileData} : {fileData: string | undefined} = useFileFetcher({fileURI});
  const fileDescription = gist?.description;

  const hiddenFileInput = useRef<HTMLInputElement | null>(null);
  const contextValue = useContext(AuthContext);
  const user = contextValue?.user;
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [description, setDescription] = useState(fileDescription || '');
  const [fileName, setFileName] = useState(filename || '');
  const [fileData, setFileData] = useState(sharedFileData || '');

  const onCreation = async () => {
    await queryClient.invalidateQueries({ queryKey: ['userGists', 'starredGists'] });
    navigate('/usergists', {state: {user, starred: false}})
  };

  const createGist = useCreateGist({
    description: description,
    files: { [fileName]: {content: fileData} },
    onCreation: onCreation
  });
  
  const updateGist = useUpdateGist({
    gistID: gist?.id || '',
    description: description,
    files: { [fileName]: {content: fileData} },
    onCreation: onCreation
  });

  const createMutation = async () => {
    createGist.mutate();
  }
  
  const updateMutation = async () => {
    updateGist.mutate();
  }

  const onUpload = () => {
    return hiddenFileInput?.current?.click();
  }
  
  const addFile = (event: SyntheticEvent) => {
    const targetEvent = (event.target as HTMLInputElement);
    const selectedFile = targetEvent.files && targetEvent.files[0] as Blob;
    const reader = new FileReader();
    reader.onload = async (e) => { 
      const text = e?.target?.result as string;
      setFileData(prev => prev + text);
    };
    selectedFile && reader.readAsText(selectedFile);
  }

  return (
    <CreateGistsMainDiv>
      {(createGist.isPending || updateGist.isPending) && <LoaderContainer>
        <CircularProgress />
      </LoaderContainer>}
      <CreateGistsInputsContainer>
        <StyledInputField
          label={'Enter gist description'}
          variant={'outlined'}
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <StyledInputField
          label={'Enter file name'}
          variant={'outlined'}
          value={fileName}
          onChange={e => setFileName(e.target.value)}
        />
        <StyledInputField
          label={'Enter file content'}
          variant={'outlined'}
          value={fileData}
          onChange={e => setFileData(e.target.value)}
          multiline
          rows={8}
        />
        <CreateGistsButtonsContainer>
          <input ref={hiddenFileInput} onChange={addFile} style={{display: 'none'}} type={'file'} />
          <CreateGistsStyledButtons onClick={onUpload}>{'Add File'}</CreateGistsStyledButtons>
          <CreateGistsStyledButtons
            onClick={() => gist? updateMutation() : createMutation()}>
              {`${gist ? 'Save Changes' : 'Create Gist'}`}
            </CreateGistsStyledButtons>
        </CreateGistsButtonsContainer>
      </CreateGistsInputsContainer>
    </CreateGistsMainDiv>
  )
}

export default CreateGist