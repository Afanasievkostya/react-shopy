import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './containes/header/Header';
import Main from './containes/main/Main';
import {Footer} from './containes/footer/Footer';
import {Product} from './pages/product/Product';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/product" component={Product} />
          <Route render={() => <h1 style={{color: 'red', textAlign: 'center', paddingTop: '5rem', paddingBottom: '35rem'}}>404 not found</h1>} />
        </Switch>
        <Footer />
      </BrowserRouter>
    )
  }
}

export default App;
