import styled from 'styled-components';

export const Container = styled.div`
  background-color: #c5e5ff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(0, 0, 0);
  font-weight: 500;
`;

export const Button = styled.button`
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  cursor: pointer;
`;

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25vh;
  position: absolute;
`;
