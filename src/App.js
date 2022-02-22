import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import BooksContainer from './components/BooksContainer';
import Categories from './components/Categories';
import Navbar from './components/Navbar';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <BooksContainer />
          </Route>
          <Route exact path="/categories">
            <Categories />
          </Route>
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
