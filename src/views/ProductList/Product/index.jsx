import { ProductContainer } from './styled.comonents';

const ProductList = ({ product, onClick }) => {
  const { model } = product;

  return (
    <ProductContainer onClick={onClick}>
      <div>{model}</div>
    </ProductContainer>
  );
};

export default ProductList;
