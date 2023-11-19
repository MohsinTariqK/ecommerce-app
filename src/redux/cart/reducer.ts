import { CartItem } from '../../models/cart';
import {
    INCREMENT_QUANTITY,
    DECREMENT_QUANTITY,
    REMOVE_FROM_CART,
    CartActionTypes
  } from './types';
  
  export interface CartState {
    items: CartItem[];
  }
  
  const initialState: CartState = {
    items: [],
  };
  
  const cartReducer = (state = initialState, action: CartActionTypes): CartState => {
    switch (action.type) {
      case INCREMENT_QUANTITY:
        const existingItem = state.items.find((item) => item.id === action.payload.id);
        if (existingItem) {
          return {
            ...state,
            items: state.items.map((item) =>
              item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
            ),
          };
        } else {
          return {
            ...state,
            items: [...state.items, { ...action.payload, quantity: 1 }],
          };
        }
      case DECREMENT_QUANTITY:
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
          ),
        };
      case REMOVE_FROM_CART:
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.payload.id),
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  