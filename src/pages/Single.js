import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../Context";
class Single extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug
    };
    console.log(this.state.slug);
  }
  static contextType = ProductContext;
  render() {
    const { getProduct, addToCart } = this.context;
    const pro = getProduct(this.state.slug);
    if (!pro) {
      return <div className="error">No Such Product Available</div>;
    }
    let { id, title, img, price, inCart, info, company } = pro;

    return (
      <div className="productDetails">
        <div className="product-image-deatil">
          <img src={img} alt={img} />
        </div>
        <div className="product-details">
          <h4>{title}</h4>
          <span>{company}</span>
          <br />
          <span>${price}</span>
          <br />
          <span>{info}</span>
          <br />
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
      </div>
    );
  }
}
export default Single;
