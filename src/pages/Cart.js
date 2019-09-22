import React, { Component } from "react";
import { ProductConsumer } from "../Context";
class Cart extends Component {
  // static contextType = ProductContext;
  render() {
    // let { cart, increment, decrement, removeItem, clearCart } = this.context;

    return (
      <ProductConsumer>
        {value => {
          const {
            cart,
            increment,
            decrement,
            removeItem,
            clearCart,
            cartSubtotal,
            cartTex,
            cartTotal
          } = value;
          if (cart.length > 0) {
            return (
              <>
                <button
                  type="submit"
                  onClick={() => {
                    clearCart();
                  }}
                >
                  Clear Cart
                </button>
                <br />
                <div className="total">
                  <span>SubTotal:{cartSubtotal}</span>
                  <span>Tex:{cartTex}</span>
                  <span>Total:{cartTotal}</span>
                </div>
                <ul>
                  {cart.map(item => {
                    return (
                      <li className="cart-item" key={item.id}>
                        <div className="cart-item-image">
                          <img src={item.img} alt={item.img} />
                        </div>
                        <div className="cart-item-info">
                          <span>Name:{item.title}</span>
                          <br />
                          <span>Company:{item.company}</span>
                          <br />
                          <span>Price:{item.price}</span>
                          <br />
                          <br />
                          <div className="cart-item-buttons">
                            <button
                              type="submit"
                              onClick={() => {
                                increment(item.id);
                              }}
                            >
                              +
                            </button>
                            <span>{item.count}</span>
                            <button
                              type="submit"
                              onClick={() => {
                                decrement(item.id);
                              }}
                            >
                              -
                            </button>
                          </div>
                          <button
                            type="submit"
                            onClick={() => {
                              removeItem(item.id);
                            }}
                          >
                            X
                          </button>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </>
            );
          } else {
            return <div className="error">Sorry NO Product in Cart</div>;
          }
        }}
      </ProductConsumer>
    );
  }
}
export default Cart;
