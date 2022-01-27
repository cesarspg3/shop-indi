import { ProductContainer } from './styled.comonents';

const ProductList = ({ product }) => {
  const {
    // id,
    model,
    imgUrl,
  } = product;

  return (
    <ProductContainer>
      <div>{model}</div>
      <div>{imgUrl}</div>
    </ProductContainer>
  );
};

export default ProductList;
