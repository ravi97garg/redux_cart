export const addItem = (id) => {
    return {type: 'ADD_ITEM', id};
};

export const decreaseItem = (id) => {
    return {type: 'DECREASE_ITEM', id};
};

export const addProduct = (product) => {
    return {type: 'ADD_PRODUCT', product};
};

export const removeItem = (id, incart) => {
    return {type: 'REMOVE_ITEM', id, incart};
};