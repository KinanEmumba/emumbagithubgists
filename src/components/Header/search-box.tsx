import { Search } from '@mui/icons-material'
import { InputAdornment } from '@mui/material';
import { StyledTextfieldContainer, TextFieldStyled } from './header-styles';
import { useEffect, useState } from 'react';
import { useGetGistsByID } from '../../apis/apis';
import { useDebounce } from 'use-debounce';
import { GistDataType } from '../../types';

const SearchBox = ({
  searchResult
}: {
  searchResult: ({
    data,
    error
  }: {
    data?: GistDataType,
    error?: string
  }) => void
}) => {
  const [id, setID] = useState<string>('');
  const [searchValue] = useDebounce(id, 1500);
  const {data, error} = useGetGistsByID({id: searchValue});

  useEffect(()=> {
    if (data) searchResult({data});
    else if (error) searchResult({error: error.message});
  },[data, error, searchResult])

  return (
    <StyledTextfieldContainer>
      <TextFieldStyled
        fullWidth
        label={'Search'}
        onChange={e => setID(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position={'end'}>
              <Search sx={{color: 'white'}}/>
            </InputAdornment>
          ),
        }}
      />
    </StyledTextfieldContainer>
  )
}

export default SearchBox;