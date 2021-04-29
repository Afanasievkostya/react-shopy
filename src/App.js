import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './containes/header/Header';
import Main from './containes/main/Main';
import {Footer} from './containes/footer/Footer';
import Product from './pages/product/Product';
import ProductUser from './pages/productUser/ProductUser';
import About from './pages/about/About';
import Regitrant from './pages/regitrant/Regitrant';
import Admin from './admin/Admin';
//eslint-disable-next-line no-unused-vars
import firebase from 'firebase';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/product/:index/:id" component={ProductUser} />
          <Route path="/product" component={Product} />
          <Route path="/about" component={About} />
          <Route path="/regitrant" component={Regitrant} />
          <Route path="/admin" component={Admin} />
          <Route render={() => <h1 style={{color: 'red', textAlign: 'center', paddingTop: '5rem', paddingBottom: '35rem'}}>404 not found</h1>} />
        </Switch>
        <Footer />
      </BrowserRouter>
    )
  }
}

export default App;
