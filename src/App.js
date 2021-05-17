import React, {Component} from 'react';
import {BrowserRouter, Switch, Redirect, Route, withRouter} from 'react-router-dom';
import Header from './containes/header/Header';
import Main from './containes/main/Main';
import {Footer} from './containes/footer/Footer';
import Product from './pages/product/Product';
import ProductUser from './pages/productUser/ProductUser';
import About from './pages/about/About';
import Regitrant from './pages/regitrant/Regitrant';
import Admin from './admin/Admin';
import Accessories from './pages/accessories/Accessories';
import Clothes from './pages/clothes/Clothes';
import Shoes from './pages/shoes/Shoes';
//eslint-disable-next-line no-unused-vars
import firebase from 'firebase';

import {connect} from 'react-redux';
import Logout from './components/logout/Logout';
import {autoLogin} from './store/actions/about';

class App extends Component {

  componentDidMount() {
    this.props.autoLogin()
  }

  render() {

    let routes = (
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/product/:index/:id" component={ProductUser} />
        <Route path="/product" component={Product} />
        <Route path="/accessories" component={Accessories} />
        <Route path="/clothes" component={Clothes} />
        <Route path="/shoes" component={Shoes} />
        <Route path="/about" component={About} />
        <Route path="/regitrant" component={Regitrant} />
        <Redirect to="/" />
        <Route render={() => <h1 style={{color: 'red', textAlign: 'center', paddingTop: '5rem', paddingBottom: '35rem'}}>404 not found</h1>} />
      </Switch>
    )
    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/product/:index/:id" component={ProductUser} />
        <Route path="/product" component={Product} />
        <Route path="/accessories" component={Accessories} />
        <Route path="/clothes" component={Clothes} />
        <Route path="/shoes" component={Shoes} />
        <Route path="/admin" component={Admin} />
        <Route path="/logout" component={Logout} />
        <Redirect to="/" />
        <Route render={() => <h1 style={{color: 'red', textAlign: 'center', paddingTop: '5rem', paddingBottom: '35rem'}}>404 not found</h1>} />
        </Switch>
      )
    }


    return (
      <BrowserRouter>
        <Header />
        { routes }
        <Footer />
      </BrowserRouter>
    )
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.about.token
  }
}

function mapDispatchToProps(dispatch) {
  return {
    autoLogin: () => dispatch(autoLogin())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
