import React, { Component } from 'react';
import './App.css';
import {addItem, decreaseItem, removeItem} from "./actions/user.actions";
import {connect} from "react-redux";
import Cart from "./components/cart";
import ProductList from "./components/productList";


class App extends Component {
  addItem = (id) => {
    this.props.addItem(id);
  };

  removeItem = (id, quantity) => {
    this.props.removeItem(id, quantity);
  };

  decreaseItem = (id) => {
    this.props.decreaseItem(id);
  };

  render() {
    return (
      <div className="App">
        <ProductList/>
        <Cart/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

// const mapDispatchToProps = (dispatch) => (
//     {
//       addItem: (id) => dispatch(addItem(id))
//     }
// )

const mapDispatchToProps = {
  addItem, removeItem, decreaseItem
};

export default connect(mapStateToProps, mapDispatchToProps)(App);