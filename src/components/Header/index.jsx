import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import { HeaderContainer, Title } from './styled.comonents';

const Header = ({ children }) => {
  return (
    <HeaderContainer>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        // onClick={handleClose}
      >
        <ArrowBackIosNewIcon fontSize="small" />
      </IconButton>
      <Title>{children}</Title>
    </HeaderContainer>
  );
};

export default Header;
