import { CartItem } from './reducer'

export type CartAction =
  | { type: 'add'; cartItem: CartItem }
  | { type: 'remove'; itemId: string }
  | { type: 'update'; itemId: string; quantity: number }

export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  UPDATE_CART = 'UPDATE_CART',
}

export function addToCartAction(newItem: CartItem) {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      newItem,
    },
  }
}

export function removeFromCartAction(itemId: string) {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: {
      itemId,
    },
  }
}

export function updateCartAction(itemId: string, quantity: number) {
  return {
    type: ActionTypes.UPDATE_CART,
    payload: {
      itemId,
      quantity,
    },
  }
}
