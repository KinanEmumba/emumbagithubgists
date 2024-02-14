import { Search } from '@mui/icons-material'
import { InputAdornment } from '@mui/material';
import { StyledTextfieldContainer, TextFieldStyled } from './header-styles';

const SearchBox = () => {
  return (
    <StyledTextfieldContainer>
      <TextFieldStyled
        fullWidth
        label={'Search'}
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