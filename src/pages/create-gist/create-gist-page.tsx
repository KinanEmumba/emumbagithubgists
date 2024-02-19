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
import { githubGistsBaseURL } from "../../const-urls";

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
    // createGist.mutate();
    async function postData(url = "", data = {}) {
      const access_token = 'ghu_I60xzCSIfzJLuustUFkioBCvJfyL7c3Io2bP';
      const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          Authorization: `Bearer ${access_token}`,
          Accept: 'application/vnd.github+json',
          'X-GitHub-Api-Version': '2022-11-28',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      });
      return response.json(); // parses JSON response into native JavaScript objects
    }
    postData(githubGistsBaseURL, {
      description: description,
      files: {[fileName] : {content: fileData}}
    }).then((data) => {
      console.log('FETCH RESPONSE', data);
    });
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