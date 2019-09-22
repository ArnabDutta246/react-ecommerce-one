import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductAll from "./productAll";
import { ProductContext } from "../Context";
class Product extends Component {
  static contextType = ProductContext;
  render() {
    let { products } = this.context;
    products = products.map(item => {
      return <ProductAll key={item.id} productAll={item} />;
    });
    return <>{products}</>;
  }
}

export default Product;
