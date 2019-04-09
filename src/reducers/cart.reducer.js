import {products} from "../product-data";

const initialState = {
    list: [],
    totalPrice: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ITEM": {
            console.log("hello from cart", action.id, state.list);
            const index = state.list.findIndex(x => x.id === action.id);
            // state.totalPrice += state.list[index].price;
            if (index === -1){
                const list = [...state.list];
                list.push({id: action.id,
                    name: products.filter((item) => {
                        return item.id === action.id
                    })[0].name,
                    quantity: 1
                });
                let totalPrice = products.filter((item) => {
                    return item.id === action.id
                })[0].price+state.totalPrice;

                return {list: list,totalPrice: totalPrice}
            } else {
                const list = [...state.list];
                const index = list.findIndex(x => x.id === action.id)
                list[index] = {...list[index], quantity: list[index].quantity+1}
                let totalPrice = products.filter((item) => {
                    return item.id === action.id
                })[0].price+state.totalPrice;
                return {list: list, totalPrice: totalPrice}
            }
        }
        case "DECREASE_ITEM": {
            const index = state.list.findIndex(x => x.id === action.id);
            let list = [];
            if(state.list[index].quantity === 1){
                list = [...state.list.slice(0,index), ...state.list.slice(index+1)]
            } else {
                const elem = {...state.list[index]};
                elem.quantity -= 1;
                list = [...state.list.slice(0,index), elem, ...state.list.slice(index+1)]
            }
            const totalPrice = state.totalPrice - state.list[index].price;
            return {list, totalPrice}
        }
        case "REMOVE_ITEM": {
            const index = state.list.findIndex(x => x.id === action.id);
            const totalPrice = state.totalPrice - state.list[index].price*action.incart;
            return {list: state.list.filter((item) => {return (item.id !== action.id)}), totalPrice};
        }
        default: {
            return {...state};
        }
    }
}

export default reducer;