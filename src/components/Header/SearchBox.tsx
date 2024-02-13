import { Search } from '@mui/icons-material'
import { InputAdornment } from '@mui/material';
import { TextFieldStyled } from './StyledTextField';

const SearchBox = () => {
  return (
    <div style={{width: '400px'}}>
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
    </div>
  )
}

export default SearchBox;