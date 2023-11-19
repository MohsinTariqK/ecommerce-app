import { CartItem } from "../../models/cart";

export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';


interface RemoveFromCartAction {
  type: typeof REMOVE_FROM_CART;
  payload: CartItem;
}

interface IncrementQuantityAction {
  type: typeof INCREMENT_QUANTITY;
  payload: CartItem;
}

interface DecrementQuantityAction {
  type: typeof DECREMENT_QUANTITY;
  payload: CartItem;
}

export type CartActionTypes =
  | RemoveFromCartAction
  | IncrementQuantityAction
  | DecrementQuantityAction;
