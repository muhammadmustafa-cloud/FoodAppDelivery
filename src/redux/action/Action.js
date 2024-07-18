import { ADD_ITEM, REMOVE_ITEM } from "../ActionTypes";

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

export const removeItemFromCart = index => ({
    type: REMOVE_ITEM,
    payload: index,
});
