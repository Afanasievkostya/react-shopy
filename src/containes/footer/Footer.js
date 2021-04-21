import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './Footer.module.css'

export const Footer = () => (
  <div className={classes.Footer}>
     <div className="container">
        <div className="row">
           <div className="logo col-md-9" style={{marginBottom: '20px'}}>
              <NavLink exact to="/" className={classes.brand}>Shopy</NavLink>
           </div>
           <div className="nav-social col-md-3">
              <ul className={classes.social}>
                 <li className="nav-item">
                    <a className={classes.navLink} href="https://facebook.com"><span className="font-size: 18px; color: #46505a;"><i className="fab fa-facebook-f"></i></span></a>
                 </li>
                 <li className="nav-item">
                    <a className={classes.navLink} href="https://twitter.com"><span className="font-size: 18px; color: #46505a;"><i className="fab fa-twitter"></i></span></a>
                 </li>
                 <li className="nav-item">
                    <a className={classes.navLink} href="https://plus.google.com"><span className="font-size: 18px; color: #46505a;"><i className="fab fa-google-plus-g"></i></span></a>
                 </li>
                 <li className="nav-item">
                    <a className={classes.navLink} href="https://www.instagram.com"><span className="font-size: 18px; color: #46505a;"><i className="fab fa-instagram"></i></span></a>
                 </li>
              </ul>
           </div>
        </div>
     </div>
  </div>
)
