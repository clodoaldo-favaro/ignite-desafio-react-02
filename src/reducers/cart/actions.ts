import { CartItem } from './reducer'

export enum ActionTypes {
  ADD_NEW_CART_ITEM = 'ADD_NEW_CART_ITEM',
  REMOVE_CART_ITEM = 'REMOVE_CART_ITEM',
  UPDATE_CART_ITEM = 'UPDATE_CART_ITEM',
}

export function addNewCartItemAction(newCartItem: CartItem) {
  return {
    type: ActionTypes.ADD_NEW_CART_ITEM,
    payload: {
      newCartItem,
    },
  }
}

export function removeCartItemAction(itemId: string) {
  return {
    type: ActionTypes.REMOVE_CART_ITEM,
    payload: {
      itemId,
    },
  }
}

export function updateCartItemAction(itemId: string, quantity: number) {
  return {
    type: ActionTypes.UPDATE_CART_ITEM,
    payload: {
      itemId,
      quantity,
    },
  }
}
