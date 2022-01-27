import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions as productActions } from '../../redux/actions/home';

import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { CircularProgress } from '@mui/material';

import Product from './Product';
import { LoaderContainer, Container } from './styled.comonents';

const ProductList = () => {
  const dispacth = useDispatch();
  const { loading, products, error } = useSelector((state) => state.products);
  const [snackError, setSnackError] = useState(!!error);

  const handleClose = () => {
    setSnackError(false);
  };

  useEffect(() => {
    dispacth(productActions.getProducts());
  }, [dispacth]);

  return (
    <Container>
      {loading && <LoaderContainer>{<CircularProgress />}</LoaderContainer>}
      {products && (
        <>
          {products.map((product, i) => (
            <Product product={product} key={i} />
          ))}
        </>
      )}
      {error && (
        <Snackbar
          open={snackError}
          autoHideDuration={1000}
          message={error}
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        />
      )}
    </Container>
  );
};

export default ProductList;
