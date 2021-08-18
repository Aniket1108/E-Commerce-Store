import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import SingleProduct from './Components/Products/SingleProduct';


function App() {

  return (
    <div className="App">
      <Router >
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/product/:id" exact component={SingleProduct} />
        </Switch>
      </Router >
    </div>
  );
}

export default App;
