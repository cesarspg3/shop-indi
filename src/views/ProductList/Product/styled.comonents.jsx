import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  background-color: #3483d6;
  color: #f4f4f4;
  width: calc(25% - 24px);
  margin-left: 8px;
  margin-right: 8px;
  border-radius: 5px;
  margin-top: 16px;
  padding: 4px;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
  &:hover {
    opacity: 0.8;
  }
`;
