import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import classes from './Table.module.css';


class Table extends Component {
  render() {
    return (
      <tbody className={classes.tbody} key={this.props.id}>
        <tr>
          <th scope="row">{this.props.index}</th>
          <td>{this.props.id}</td>
          <td>{this.props.name}</td>
          <td>{this.props.email}</td>
          <td>{this.props.title}</td>
          <td>{this.props.rightAnswer}</td>
          <td><p onClick={this.props.onClick}>delete</p></td>
        </tr>
      </tbody>
    )
  }
}

export default withRouter(Table)
