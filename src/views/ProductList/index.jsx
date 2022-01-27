import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions as productActions } from '../../redux/actions/home';

import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { CircularProgress } from '@mui/material';

import Product from './Product';
import Header from '../../components/Header';

import {
  LoaderContainer,
  Container,
  ProductsContainer,
} from './styled.comonents';
import SearchInput from './SearchInput';

const getFilteredProducts = ({ filterText, products }) => {
  let filteredProducts;

  if (filterText !== '') {
    filteredProducts = products.filter((product) => {
      return product.model.toUpperCase().includes(filterText.toUpperCase());
    });
  } else {
    filteredProducts = products;
  }

  return filteredProducts;
};

const ProductList = () => {
  const dispacth = useDispatch();
  const { loading, products, error } = useSelector((state) => state.products);
  const [snackError, setSnackError] = useState(!!error);
  const [filterText, setFilterText] = useState('');
  const handleClose = () => {
    setSnackError(false);
  };

  const handleProductClick = (product) => {
    console.log(product);
    //history.push(deatilpage)
    //add product in the navigation
  };

  const handleInput = (value) => {
    setFilterText(value);
  };

  useEffect(() => {
    dispacth(productActions.getProducts());
  }, [dispacth]);

  let renderProducts;
  if (products) {
    renderProducts = getFilteredProducts({ filterText, products }).map(
      (product, i) => (
        <Product
          product={product}
          key={i}
          onClick={() => handleProductClick(product)}
        />
      ),
    );
  }

  return (
    <Container>
      <Header>Products app</Header>
      {loading && <LoaderContainer>{<CircularProgress />}</LoaderContainer>}

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

      {products && (
        <>
          <SearchInput onInput={handleInput} />
          <ProductsContainer>{renderProducts}</ProductsContainer>
        </>
      )}
    </Container>
  );
};

export default ProductList;
