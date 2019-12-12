import React, { Component } from 'react'
import store from '../store/index'
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
    }
    render() {
        const { cartProducts, totalPrice, checkout, checkoutStatus } = this.props
        console.log(this.props);

        return (
            <div>
                <h2>Cart</h2>
                <ul>
                    {cartProducts.map(item => (
                        <li key={item.id}>
                            {item.title} - {item.price} * {item.quantity}
                            <br />
                        </li>
                    ))}
                </ul>
                {!cartProducts.length && <p>Please add some products to cart.</p>}
                <p>总价:{totalPrice}</p>
                <div>
                    <button
                        disabled={!cartProducts.length}
                        onClick={() => checkout(cartProducts)}>Checkout</button>
                </div>
                {checkoutStatus && <p>结算状态: {checkoutStatus}</p>}
            </div>
        )
    }
}

export default Cart