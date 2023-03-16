import { CreateCartItemData } from './reducer'

export type CartAction =
  | { type: 'add'; cartItem: CreateCartItemData }
  | { type: 'remove'; itemId: number }
  | { type: 'update'; itemId: number; quantity: number }

export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  UPDATE_CART = 'UPDATE_CART',
}

export function addToCartAction(newItem: CreateCartItemData) {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      newItem,
    },
  }
}

export function removeFromCartAction(itemId: number) {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: {
      itemId,
    },
  }
}

export function updateCartAction(itemId: number, quantity: number) {
  return {
    type: ActionTypes.UPDATE_CART,
    payload: {
      itemId,
      quantity,
    },
  }
}
