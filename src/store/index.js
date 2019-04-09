import { createStore, combineReducers } from 'redux';
import cart from '../reducers/cart.reducer';
import products from '../reducers/product.reducer';

const reducers = combineReducers({
    products, cart
});

export const store = createStore(reducers);
