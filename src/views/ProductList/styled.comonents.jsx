import styled from 'styled-components';

export const Container = styled.div`
  background-color: #e7ebef;
  min-height: 100vh;
  width: 100%;
  color: rgb(0, 0, 0);
  font-weight: 500;
`;

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25vh;
  position: absolute;
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  padding-bottom: 100px;
`;
