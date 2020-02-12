import React, { Component } from "react";
import ProductItem from "./product-item";
import Addproduct from "./addproduct";
import "./App.css";

const products = [
  {
    name: "Ipad",
    price: 300
  },
  {
    name: "Iphone",
    price: 600
  }
];

localStorage.setItem("products", JSON.stringify(products));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: JSON.parse(localStorage.getItem("products"))
    };
    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }
  componentWillMount() {
    const products = this.getProduct();

    this.setState({ products });
  }
  getProduct() {
    return this.state.products;
    //console.log(products);
  }
  onAdd(name, price) {
    const products = this.getProduct();
    products.push({
      name,
      price
    });
    this.setState({ products });
  }
  onDelete(name) {
    const products = this.getProduct();
    const filteredproduct = products.filter(product => {
      return product.name !== name;
    });
    console.log(filteredproduct);
    this.setState({ products: filteredproduct });
  }
  onEditSubmit(name, price, originalName) {
    let products = this.getProduct();

    products = products.map(product => {
      if (product.name === originalName) {
        product.name = name;
        product.price = price;
      }
      return product;
    });
    this.setState({ products });
  }
  render() {
    return (
      <div className="App">
        <h1>Products Manager</h1>
        <Addproduct onAdd={this.onAdd} />
        {this.state.products.map(product => {
          return (
            <ProductItem
              key={product.name}
              {...product}
              onDelete={this.onDelete}
              onEditSubmit={this.onEditSubmit}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
