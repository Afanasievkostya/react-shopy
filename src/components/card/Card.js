import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom'
import classes from './Card.module.css';


class Card extends Component {
  render() {
    return (
      <div className={classes.wrapCard}>
        <div className="card">
          <div className={classes.wrapImage}>
            <img src={'../../img/' + this.props.image} className="card-img-top" alt="" />
          </div>
          <div className="card-body">
            <h5 className={classes.cardTitle}>Имя продовца: <strong>{this.props.name}</strong></h5>
            <h5 className={classes.cardTitle}>Категория товара: <strong>{this.props.rightAnswer}</strong></h5>
            <Link to={'/product/' + this.props.id + '/' + this.props.index} className="btn btn-primary" style={{marginTop: '10px'}}>Открыть</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Card)
