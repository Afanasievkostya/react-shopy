import React, { Component } from 'react';
import Card from '../../components/card/Card';
import classes from './Accessories.module.css';
import Fieldset from '../../components/fieldset/Fieldset';
import axios from 'axios';
// import firebase from 'firebase';

class Accessories extends Component {

  state = {
    productUser: []
  }

  async componentDidMount() {
    // Выбор всех данных из базы методом firebase без axios
    // const dbRef = firebase.database().ref();
    // dbRef.child("productUser").get().then((snapshot) => {
    //   if (snapshot.exists()) {
    //     console.log(snapshot.val());
    //   } else {
    //     console.log("Данные недоступны");
    //   }
    // }).catch((error) => {
    //   console.error(error);
    // });

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

  renderProductAccessor() {
    const productUser = this.state.productUser
    return productUser.map(product => {
      const accessor = this.state.cods[product.id][0]['answers'][5]['rightAnswer']
      if (accessor === 'Аксессуары') {
        return (
          <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5" key={product.id}>
            <Card id={product.id} index={product.index}
            image={this.state.cods[product.id][0]['answers'][0]['image']} name={this.state.cods[product.id][0]['answers'][1]['name']}
            rightAnswer = {this.state.cods[product.id][0]['answers'][5]['rightAnswer']}
            />
          </div>
        )
      } else {
        return (
          console.log()
        )
      }
    })
  }


  render() {

    return (
        <div className={classes.accessories}>
          <div className="container">
            <div className={classes.headerTitle}>
              <h1>Аксессуары</h1>
            </div>

            <div className="row">
            <div className="col-sm-4 col-md-3 col-lg-2">
              <Fieldset />
            </div>
            <div className="col-sm-8 col-md-9 col-lg-10">
            <div className="row" style={{marginTop: '60px'}}>
              { this.renderProductAccessor() }
            </div>
            </div>
            </div>

          </div>
        </div>
    )
  }
}

export default Accessories
