import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom'
import classes from './Fieldset.module.css';


class Fieldset extends Component {
  render() {
    return (
      <fieldset className={classes.links} style={{marginTop: '60px'}}>
        <legend>Категории:</legend>
          <ul>
            <li><Link to="/product">Все</Link></li>
            <li><Link to="/shoes">Обувь</Link></li>
            <li><Link to="/clothes">Одежда</Link></li>
            <li><Link to="/accessories">Аксессуары</Link></li>
          </ul>
      </fieldset>
    )
  }
}

export default withRouter(Fieldset)
