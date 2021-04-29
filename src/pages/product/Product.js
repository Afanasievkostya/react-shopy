import React, { Component } from 'react';
import Card from '../../components/card/Card';
import classes from './Product.module.css';
import axios from 'axios';

class Product extends Component {

  state = {
    productUser: []
  }

  async componentDidMount() {
    try {
      const response = await axios.get('https://react-shopy-default-rtdb.firebaseio.com/productUser.json')

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
        <div className={classes.product}>
          <div className="container">
            <div className={classes.headerTitle}>
              <h1>Спорт товары</h1>
              <p>Страница с товарами пользователей</p>
            </div>
            <div className="row" style={{marginTop: '60px'}}>
              {productUser.map(product => {
                return (
                  <div className="col-sm-4 mb-4" key={product.id}>
                    <Card id={product.id} index={product.index}
                    image={this.state.cods[product.id][0]['answers'][0]['image']} name={this.state.cods[product.id][0]['answers'][1]['name']}
                    rightAnswer = {this.state.cods[product.id][0]['answers'][5]['rightAnswer']}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
    )
  }
}

export default Product
