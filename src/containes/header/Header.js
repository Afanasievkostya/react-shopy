import React, {Component, Fragment} from 'react';
import classes from './Header.module.css';
import Navbar from '../../components/navbar/Navbar';

class Header extends Component {
  render() {
    return (
      <Fragment>
        <div className={classes.main}>
          <Navbar />
        </div>
      </Fragment>
    )
  }
}

export default Header;
