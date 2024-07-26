// Reducers.js
import { ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM_QUANTITY } from "../ActionTypes";

const initialState = {
    addItemToCart:[]
};

export const Reducers = (state = initialState, { payload, type }) => {
    switch (type) {
        case ADD_ITEM:{
     
            // console.log('----addItemToCart------------existingCartItemIndex---', existingCartItemIndex)
            // console.log('----addItemToCart------------state.addToCart---', state.addToCart)
            console.log('----addItemToCart------------payload.result---', payload.result)
            // console.log('----addItemToCart------------payload.result.item.id----', payload.result)
      
            console.log('----addItemToCart------------state.addToCaRT----', state.addItemToCart)
            console.log('----addItemToCart------------state.addToCart.length----', state.addItemToCart.length)
            
            for(let i = 0; i < state.addItemToCart.length ; i++){
      
                console.log('----newState------------state.addToCart[i].item.id----')
                console.log('----newState------------payload.result.item.id-----', payload )
                console.log('----newState------------.state.addItemToCart[i].id-----',state.addItemToCart)
              if ( state.addItemToCart[i].id ==  payload.result.id ) {
                  
                  
                  const newState = [...state.addItemToCart];
                newState[i].quantity += payload.result.quantity;
        
                console.log('----newState------------newState', newState)
                return {...state, addItemToCart: newState};
              }
            }
      
            return { ...state, addItemToCart: [...state.addItemToCart, payload.result] }
          }
        case UPDATE_ITEM_QUANTITY: {
            return state.map(item =>
                item.id === payload.id
                    ? { ...item, quantity: payload.quantity }
                    : item
            );
        }
        case REMOVE_ITEM: {
            const deleteArray = state.filter((item, index) => index !== payload);
            return deleteArray;
        }
        default: {
            return state;
        }
    }
};
