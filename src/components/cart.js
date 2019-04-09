import React, {Component} from 'react';
import {addItem, decreaseItem, removeItem} from "../actions/user.actions";
import {connect} from "react-redux";

class Cart extends Component{

    increaseQuantity = (id) => {
        this.props.addItem(id);
    }

    decreaseQuantity = (id) => {
        this.props.decreaseItem(id);
    }

    removeQuantity = (id, quantity) => {
        this.props.removeItem(id, quantity);
    }

    render(){
        return (
            <div className="cart-view">
            {this.props.list.map((elem) => {
                return (
                    <CartTemplate name={elem.name}
                                  quantity={elem.quantity}
                                  key={elem.id}
                                  id={elem.id}
                                  increaseQtyCallback = {this.increaseQuantity}
                                  decreaseQtyCallback = {this.decreaseQuantity}
                                  removeQtyCallback = {this.removeQuantity}
                    />
                )
                })}
                <TotalPrice totalPrice={this.props.totalPrice}/>
            </div>

        )
    }

}

const CartTemplate = (props) => {
    return (
        <div>
            {props.name}
            {props.quantity}
            <button onClick={() => props.increaseQtyCallback(props.id)}>+</button>
            <button onClick={() => props.decreaseQtyCallback(props.id)}>-</button>
            <button onClick={() => props.removeQtyCallback(props.id, props.quantity)}>x</button>
        </div>
    )
};

const TotalPrice = (props) => {
    return (
        <div>
            Total Price: Rs. {props.totalPrice}
        </div>
    )
}

const mapStateToProps = (state) => {
    return state.cart;
};


const mapDispatchToProps = {
    addItem, removeItem, decreaseItem
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);