import React from "react";
import { ProductConsumer } from "../Context";
import Product from "../components/Product";
export default function Home() {
  return (
    <div className="product-all">
      <Product />
    </div>
  );
}
