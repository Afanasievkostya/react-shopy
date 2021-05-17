import React, { Component } from 'react';
import Card from '../../components/card/Card';
import classes from './Clothes.module.css';
import Fieldset from '../../components/fieldset/Fieldset';
import axios from 'axios';

class Clothes extends Component {

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

  renderProductClothe() {
    const productUser = this.state.productUser
    return productUser.map(product => {
      const clothe = this.state.cods[product.id][0]['answers'][5]['rightAnswer']
      if(clothe === 'Одежда') {
        return (
          <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5" key={product.id}>
            <Card id={product.id} index={product.index}
            image={this.state.cods[product.id][0]['answers'][0]['image']} name={this.state.cods[product.id][0]['answers'][1]['name']}
            rightAnswer = {this.state.cods[product.id][0]['answers'][5]['rightAnswer']}
            />
          </div>
        )
      }else {
        return (
          console.log()
        )
      }
    })
  }

  render() {
    return (
        <div className={classes.clothes}>
          <div className="container">
            <div className={classes.headerTitle}>
              <h1>Одежда</h1>
            </div>

            <div className="row">
              <div className="col-sm-4 col-md-3 col-lg-2">
                <Fieldset />
              </div>
              <div className="col-sm-8 col-md-9 col-lg-10">
                <div className="row" style={{marginTop: '60px'}}>
                  { this.renderProductClothe() }
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default Clothes
