import React, {Component} from "react";
import {addItem} from "../actions/user.actions";
import {connect} from "react-redux";

class ProductList extends Component{

    addItem = (id) => {
        this.props.addItem(id)
    };

    render() {
        return (
            <div className='product-list'>
                {this.props.list.map((product) => {
                    return (
                        <ProductCard id={product.id}
                                     addItemCallback={this.addItem}
                                     image={product.image}
                                     name={product.name}
                                     quantity={product.quantity}
                                     price={product.price}
                        />
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.products
}

const mapDispatchToProps = {
    addItem
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

const ProductCard = (props) => {
    return (
        <div className="product-card">
            <img src={props.image} alt={'imageUrl'+props.image}/>
            <span>{props.name}</span>
            <span>In Stock({props.quantity})</span>
            <span>Rs. {props.price}</span>
            <button onClick={() => props.addItemCallback(props.id)}>ADD TO CART</button>

        </div>
    )
}