import {products} from "../product-data";

const initialState = {
    list: products
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ITEM": {
            console.log("hello from product", state);
            const index = state.list.findIndex(x => x.id === action.id);
            console.log(action.id);
            console.log(index);
            const productObjCopy = {...state.list[index]};
            console.log(productObjCopy.quantity);
            productObjCopy.quantity -= 1;
            return { list: [...state.list.slice(0,index), productObjCopy, ...state.list.slice(index+1)]};
        }
        case "DECREASE_ITEM": {
            const index = state.list.findIndex(x => x.id === action.id);
            const productObjCopy = {...state.list[index]};
            productObjCopy.quantity += 1;
            return { list: [...state.list.slice(0,index), productObjCopy, ...state.list.slice(index+1)]};
        }
        case "REMOVE_ITEM": {
            console.log("$$$$$$$",action)
            const index = state.list.findIndex(x => x.id === action.id)
            console.log("pagal", index, action.id);
            const productObjCopy = {...state.list[index]};
            console.log("action",action.incart);
            productObjCopy.quantity += action.incart;
            console.log("quantity", productObjCopy.quantity);
            return { list: [...state.list.slice(0,index), productObjCopy, ...state.list.slice(index+1)]};
        }
        default: {
            return state;
        }
    }
}

export default reducer;