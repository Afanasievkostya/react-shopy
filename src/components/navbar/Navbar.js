import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Search} from '../Search';
import classes from './Navbar.module.css';

class Navbar extends Component {
  renderLinks(links) {
    return links.map((link, index) => {
      return (
        <li key={index} className={classes.link}>
          <NavLink
            to={link.to}
            exact={link.exact}
            className="nav-link"
          >
            {link.label}
          </NavLink>
        </li>
      )
    })
  }

  render() {
    const links = [
      {to: '/', label: 'главная', exact: true},
      {to: '/product', label: 'товары', exact: false},
      {to: '/about', label: 'личный кабинет', exact: false}
    ]
    return (
      <div className={classes.Navbar}>
         <nav className="navbar navbar-expand-lg navbar-dark " style={{backgroundColor: '#734f69'}}>
         <div className="container-fluid">
            <NavLink to="/" className="navbar-brand mb-0 h1">
               <span className={classes.navbarTitle}>Shopy</span>
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  { this.renderLinks(links) }
               </ul>
               <Search />
            </div>
         </div>
         </nav>
      </div>
    )
  }
}


export default Navbar;
