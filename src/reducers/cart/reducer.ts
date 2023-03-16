import { produce } from 'immer'
import { ActionTypes } from './actions'

export interface CartItem {
  id: number
  productId: string
  price: number
  quantity: number
  name: string
  imgSrc: string
}

export interface CreateCartItemData {
  productId: string
  price: number
  quantity: number
  name: string
  imgSrc: string
}

export interface CartState {
  cartItems: CartItem[]
  nextId: number
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART: {
      const cartItemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.productId === action.payload.newItem.productId,
      )

      if (cartItemIndex < 0) {
        return produce(state, (draft) => {
          draft.cartItems.push(action.payload.newItem)
          draft.nextId++
        })
      }

      return produce(state, (draft) => {
        draft.cartItems[cartItemIndex].quantity +=
          action.payload.newItem.quantity
      })
    }

    case ActionTypes.REMOVE_FROM_CART: {
      const itemToBeRemovedId = action.payload.itemId
      return produce(state, (draft) => {
        draft.cartItems.filter((cartItem) => cartItem.id !== itemToBeRemovedId)
      })
    }

    case ActionTypes.UPDATE_CART: {
      return produce(state, (draft) => {
        draft.cartItems.map((cartItem) => {
          if (cartItem.id === action.payload.itemId) {
            return { ...cartItem, quantity: action.payload.quantity }
          } else {
            return cartItem
          }
        })
      })
    }

    default: {
      throw new Error('Unknown action:' + action.type)
    }
  }
}
