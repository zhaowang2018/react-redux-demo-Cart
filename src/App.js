import React, { Component } from 'react';
import Cart from './containers/CartContainer';
import Products from './containers/ProductsContainer';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Shopping Cart Example</h1>
        <hr />
        <Products />
        <hr />
        <Cart />
      </div>
    )
  }
}

export default App;
