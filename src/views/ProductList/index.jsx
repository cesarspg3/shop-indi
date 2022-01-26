import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions/home';

import CircularProgress from '@material-ui/core/CircularProgress';
import Product from './Product';
import { Button, LoaderContainer, Container } from './styled.comonents';

const ProductList = () => {
  const dispacth = useDispatch();
  const { loading, products } = useSelector((state) => state.products);

  const handleClick = () => {
    dispacth(getProducts());
  };

  useEffect(() => {
    dispacth(getProducts());
  }, [dispacth]);

  return (
    <Container>
      <Button onClick={handleClick}>test</Button>
      {loading ? (
        <LoaderContainer>
          <CircularProgress />
        </LoaderContainer>
      ) : (
        <>
          {products.map((product, i) => (
            <Product product={product} key={i} />
          ))}
        </>
      )}
    </Container>
  );
};

export default ProductList;
