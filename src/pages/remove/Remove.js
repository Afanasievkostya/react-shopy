import React, { Component } from 'react';
import classes from './Remove.module.css';
import {Link} from 'react-router-dom';
import Table from '../../components/table/Table';
import axios from '../../axios/axios-firebase';
import {connect} from 'react-redux';

class Remove extends Component {

  state = {
    productUser: []
  }

    async componentDidMount() {
      try {
        const response = await axios.get('/productUser.json')

        const productUser = this.state.productUser

        Object.keys(response.data).forEach((key, index) => {
          productUser.push({
            id: key,
            index: index + 1
          })
        })

        this.setState({
          productUser,
          cods: response.data
        })

      } catch(e) {
        console.log(e)
       }
    }


  render() {
    const productUser = this.state.productUser
    return (
      <div className="container">
      <div className={classes.remove}>
          <div className={classes.headerTitle}>
            <h1>Редактирование</h1>
            <p>Добро пожаловать <span>{this.props.name}</span></p>
          </div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to={'/admin'}>Личный кабинет</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Редактирование</li>
            </ol>
          </nav>
            <div className={classes.wrapTable}>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">ID</th>
                    <th scope="col">Имя</th>
                    <th scope="col">Email</th>
                    <th scope="col">Название товара</th>
                    <th scope="col">Категории</th>
                    <th scope="col">Удалить</th>
                  </tr>
                </thead>
              {
                productUser.map(product => {
                  const emailUser = this.state.cods[product.id][0]['answers'][2]['email']

                  if (emailUser === this.props.email) {

                    return (
                        <Table id={product.id} index={product.index} key={product.id}
                        name={this.state.cods[product.id][0]['answers'][1]['name']}
                        email={this.state.cods[product.id][0]['answers'][2]['email']}
                        title={this.state.cods[product.id][0]['answers'][3]['text']}
                        rightAnswer={this.state.cods[product.id][0]['answers'][6]['rightAnswer']}
                        onClick={
                          this.deleteHandler = () => {
                            axios.delete('/productUser/' + product.id + '.json')
                            .then(function(response){
                              console.log(response.data)
                            })
                            .catch(function(error) {
                              console.error(error)
                            })
                          }
                        }/>
                    )
                  }else {
                    return (
                      console.log()
                    )
                  }
                })
              }
              </table>
          </div>
          <div className={classes.wrapTableTwo}>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Название товара</th>
                  <th scope="col">Категории</th>
                  <th scope="col">Удалить</th>
                </tr>
              </thead>
            {
              productUser.map(product => {
                const emailUser = this.state.cods[product.id][0]['answers'][2]['email']

                if (emailUser === this.props.email) {

                  return (
                      <tbody className={classes.tbody} key={this.props.id}>
                        <tr>

                          <td>{product.index}</td>
                          <td>{this.state.cods[product.id][0]['answers'][3]['text']}</td>
                          <td>{this.state.cods[product.id][0]['answers'][6]['rightAnswer']}</td>
                          <td><p onClick={
                            this.deleteHandler = () => {
                              axios.delete('/productUser/' + product.id + '.json')
                              .then(function(response){
                                console.log(response.data)
                              })
                              .catch(function(error) {
                                console.error(error)
                              })
                            }
                          }>delete</p></td>
                        </tr>
                      </tbody>
                  )
                }else {
                  return (
                    console.log()
                  )
                }
              })
            }
            </table>
        </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    name: state.about.userName,
    email: state.about.userEmail
  }
}

  export default connect(mapStateToProps)(Remove)
