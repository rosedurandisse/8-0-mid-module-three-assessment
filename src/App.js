import "./App.css";
import formatPrice from "./helpers/formatPrice";
import productData from "./data/productData";
import EachProduct from "./Components/EachProduct";
import CheckoutForm from "./Components/CheckoutForm";
import React from "react";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedItemPrice: 0,
      selectedItemName: '',
      currentCart: [],
      subtotal: 0,
    }
  }

  handleAddToCartClick = (event) => {
    console.log(event.target)
    this.setState({
      selectedItemName: event.target.name,
      selectedItemPrice: Number(event.target.value),
      subtotal: this.state.subtotal + Number(event.target.value),
      currentCart: [...this.state.currentCart, `${event.target.name}: ${formatPrice(Number(event.target.value))}`]
    })
  }

  render() {
    //this is for the product preview - change to a component when ready
    let productPreview = productData.map((eachProduct) => {
      return (
        <EachProduct
          key={eachProduct.id}
          eachProduct={eachProduct}
          handleAddToCartClick={this.handleAddToCartClick}
        />
      )
    })
    let taxTotal = this.state.subtotal * 0.05;
    let total = taxTotal + this.state.subtotal

    //map through the cart
    let itemsInCart = this.state.currentCart.map((eachSelectedItem) => {
      return (
        <li>{eachSelectedItem}</li>)
    })



    return (
      <div className='container' >
        <div className='products'>
          {productPreview}
        </div>
        <div className='Cart'>
          Cart
          <ul>
            {itemsInCart}
          </ul>
          <h3>Subtotal: {formatPrice(this.state.subtotal)}</h3>
          <h3>Tax: {formatPrice(taxTotal)}</h3>
          <h3>Total: {formatPrice(total)}</h3>
        </div>
        <CheckoutForm total={formatPrice(total)} />

      </div>

    )
  }
}


export default App;
