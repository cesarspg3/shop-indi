import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';

import { SearchInputContainer } from './styled.comonents';

const SearchInput = ({ onInput }) => {
  return (
    <SearchInputContainer>
      <TextField
        onInput={(e) => onInput(e.target.value)}
        label="Search your product"
        sx={{ m: 1, width: '25ch' }}
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            </InputAdornment>
          ),
        }}
      />
    </SearchInputContainer>
  );
};

export default SearchInput;
