import store from './redux/store';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { Provider } from 'react-redux';

const App = () => {
  const Button = styled.button`
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
    cursor: pointer;
  `;
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Button>test</Button>
        </header>
      </div>
    </Provider>
  );
};

export default App;
