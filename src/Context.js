import React, { Component } from "react";
import { storeProducts } from "./data";
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    cart: [],
    cartSubtotal: 0,
    cartTex: 0,
    cartTotal: 0
  };
  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      let single = { ...item };
      tempProducts = [...tempProducts, single];
    });
    console.log(tempProducts);
    this.setState(() => {
      return { products: [...tempProducts] };
    });
  };
  getProduct = slug => {
    const pro = this.state.products.find(product => product.slug === slug);
    console.log(pro);
    return pro;
  };
  getPro = id => {
    const pro = this.state.products.find(product => product.id === id);
    return pro;
  };
  addToCart = id => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getPro(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return {
          product: [...tempProducts],
          cart: [...this.state.cart, product]
        };
      },
      () => {
        this.addTotal();
        console.log(this.state.cart);
      }
    );
  };
  increment = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => {
      return item.id === id;
    });
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;
    console.log([...tempCart]);
    this.setState(() => {
      return { cart: [...tempCart] };
    }, this.addTotal());
  };
  decrement = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => {
      return item.id === id;
    });
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;

    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState(() => {
        return { cart: [...tempCart] };
      }, this.addTotal);
    }
  };
  removeItem = id => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item => item.id !== id);
    const index = tempProducts.indexOf(this.getPro(id));
    let removeI = tempProducts[index];
    removeI.inCart = false;
    removeI.count = 0;
    removeI.total = 0;
    this.setState(
      () => {
        return {
          products: [...tempProducts],
          cart: [...tempCart]
        };
      },
      () => {
        this.addTotal();
      }
    );
  };
  clearCart = () => {
    this.setState(
      () => {
        return {
          cart: []
        };
      },
      () => {
        this.setProducts();
        this.addTotal();
      }
    );
  };
  addTotal = () => {
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    console.log([...this.state.cart]);
    this.setState(() => {
      return {
        cartSubtotal: subTotal,
        cartTex: tax,
        cartTotal: total
      };
    });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          getProduct: this.getProduct,
          addToCart: this.addToCart,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductContext, ProductProvider, ProductConsumer };
