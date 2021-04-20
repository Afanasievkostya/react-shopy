import React, {Component, Fragment} from 'react';
import classes from './Main.module.css';
import {Home} from '../../pages/home/Home';
import Carasel from '../../components/carasel/Carasel';

class Main extends Component {
  render() {
    return (
      <Fragment>
        <div className={classes.main}>
          <Home />
        </div>
        <Carasel />
      </Fragment>
    )
  }
}

export default Main;
