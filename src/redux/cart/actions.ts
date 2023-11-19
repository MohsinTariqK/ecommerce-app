import { CartItem } from '../../models/cart';
import {
    INCREMENT_QUANTITY,
    DECREMENT_QUANTITY,
    REMOVE_FROM_CART,
    CartActionTypes,
  } from './types';
  
  export const removeFromCart = (product: CartItem): CartActionTypes => ({
    type: REMOVE_FROM_CART,
    payload: product,
  });
  
  export const incrementQuantity = (product: CartItem): CartActionTypes => ({
    type: INCREMENT_QUANTITY,
    payload: product,
  });
  
  export const decrementQuantity = (product: CartItem): CartActionTypes => ({
    type: DECREMENT_QUANTITY,
    payload: product,
  });