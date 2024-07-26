// Actions.js
import { ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM_QUANTITY } from "../ActionTypes";

export const addItemToCart = (item) => ({
    type: ADD_ITEM,
    payload: {
        id: item.id,
        name: item.name,
        price: item.price,
        img: item.img,
        images: item.images,
    },
});

// export const addItemToCart = result => ({
//     type: ADD_ITEM,
//     payload: { result }
//   })



export const updateItemQuantity = (itemId, quantity) => ({
    type: UPDATE_ITEM_QUANTITY,
    payload: {
        id: itemId,
        quantity,
    },
});

export const removeItemFromCart = (index) => ({
    type: REMOVE_ITEM,
    payload: index,
});
