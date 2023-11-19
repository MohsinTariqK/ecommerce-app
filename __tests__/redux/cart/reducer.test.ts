import cartReducer, { CartState } from '../../../src/redux/cart/reducer';
import {
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  REMOVE_FROM_CART,
} from '../../../src/redux/cart/types';

describe('Cart Reducer', () => {
  let initialState: CartState;

  beforeEach(() => {
    initialState = {
      items: [],
    };
  });

  it('should handle INCREMENT_QUANTITY action', () => {
    const state = cartReducer(initialState, {
      type: INCREMENT_QUANTITY,
      payload: {
        id: 1,
        name: 'Product Name',
        price: 10,
        quantity: 0,
      },
    });

    expect(state.items).toHaveLength(1);
    expect(state.items[0].quantity).toBe(1); // New item with quantity 1
  });

  it('should handle DECREMENT_QUANTITY action', () => {
    const state = cartReducer(
      {
        items: [{
            id: 1,
            name: 'Product Name',
            price: 10,
            quantity: 2,
          }],
      },
      {
        type: DECREMENT_QUANTITY,
        payload: {
            id: 1,
            name: 'Product Name',
            price: 10,
            quantity: 2,
        },
      }
    );

    expect(state.items[0].quantity).toBe(1); // Quantity decremented by 1
  });

  it('should handle REMOVE_FROM_CART action', () => {
    const state = cartReducer(
      {
        items: [{
            id: 1,
            name: 'Product Name',
            price: 10,
            quantity: 2,
          }],
      },
      {
        type: REMOVE_FROM_CART,
        payload: {
            id: 1,
            name: 'Product Name',
            price: 10,
            quantity: 2,
        },
      }
    );

    expect(state.items).toHaveLength(0); // Item removed from cart
  });
});
