import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../Context";
export default class productAll extends Component {
  static contextType = ProductContext;
  render() {
    let { id, title, img, price, slug, inCart } = this.props.productAll;
    let { addToCart } = this.context;
    return (
      <>
        <div className="product" key={id}>
          <Link to={`/products/${slug}`}>
            <div className="product-image">
              <img src={img} alt="" />
            </div>
          </Link>
          <div className="product-title">{title}</div>
          <div className="product-price">${price}</div>
          {inCart ? (
            <button type="submit" className="inCart" disabled>
              Incart
            </button>
          ) : (
            <button
              type="submit"
              className="inNoCart"
              onClick={() => {
                addToCart(id);
              }}
            >
              Add To Cart
            </button>
          )}
        </div>
      </>
    );
  }
}
