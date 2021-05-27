import React, {Component} from 'react';
import classes from './ProductUser.module.css';
import axios from 'axios';

class ProductUser extends Component {
  state = {
    product: []
  }

  async componentDidMount() {

    const index = this.props.match.params.index

    try {
      const response = await axios.get('https://react-shopy-default-rtdb.firebaseio.com/productUser.json', {index})
      const product = response.data[index]

      this.setState({
        product,
        image: product[0]['answers'][0]['image'],
        name: product[0]['answers'][1]['name'],
        email: product[0]['answers'][2]['email'],
        title: product[0]['answers'][3]['text'],
        price: product[0]['answers'][4]['text'],
        text: product[0]['answers'][5]['text']
      })

  } catch(e) {
    console.log(e)
  }
}

  render() {

    const image = this.state.image
    const title = this.state.title
    const name = this.state.name
    const email = this.state.email
    const price = this.state.price
    const text = this.state.text

    return (
      <div className={classes.productUser}>
        <div className="container">
          <div className={classes.productUserTitle}>
            <h1>Просмотр товара</h1>
          </div>
          <div className={classes.productUserWrap}>
            <div className="row">
              <div className="col-sm-5">
                <div className={classes.productUserImage}>
                  <img src={'../../img/' + image} alt=""/>
                </div>
              </div>
              <div className="col-sm-7">
                <ul className={classes.productUserElem}>
                  <li className={classes.productUseritem}>Название товара: <span>{title}</span></li>
                  <li className={classes.productUseritem}>Имя продовца: <span>{name}</span></li>
                  <li className={classes.productUseritem}>Email: <span>{email}</span></li>
                  <li className={classes.productUseritem}>Описание товара и связь: <span>{text}</span></li>
                  <li className={classes.productUseritem}>Цена: <span>{price}р</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductUser
