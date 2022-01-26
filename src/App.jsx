import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import store from './redux/store';

import ProductList from './views/ProductList';

const App = () => {
  return (
    <Provider store={store}>
      <Router history={createBrowserHistory()}>
        <Route exact path="/" component={ProductList} />
        <Route path="/productsList" component={ProductList} />
        {/* <Route path="/productDetail" component={ProductDetail} /> */}
      </Router>
    </Provider>
  );
};

export default App;
