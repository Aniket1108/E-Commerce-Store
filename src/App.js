import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products';
import SingleProduct from './Components/Products/SingleProduct';
import Signup from "./Components/Signup/Signup"


function App() {

  return (
    <div className="App">
      <Router >
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/product/:id" exact component={SingleProduct} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />

        </Switch>
        {/* <Signup /> */}
        <Footer />
      </Router >
    </div>
  );
}

export default App;
