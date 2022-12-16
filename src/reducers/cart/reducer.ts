import { produce } from 'immer'

import { ActionTypes } from './actions'

export interface CartItem {
  id: string
  productId: string
  price: number
  quantity: number
  description: string
}

interface CartState {
  items: CartItem[]
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CART_ITEM:
      return produce(state, (draft) => {
        draft.items.push(action.payload.newCartItem)
      })

    case ActionTypes.REMOVE_CART_ITEM: {
      const itemIdToRemove = action.payload.itemId

      const itemToRemoveIndex = state.items.findIndex(
        (item) => item.id === itemIdToRemove,
      )

      if (itemToRemoveIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.items.splice(itemToRemoveIndex, 1)
      })
    }

    case ActionTypes.UPDATE_CART_ITEM: {
      const itemIdToUpdate = action.payload.itemId

      const itemToUpdateIndex = state.items.findIndex(
        (item) => item.id === itemIdToUpdate,
      )

      if (itemToUpdateIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.items[itemToUpdateIndex].quantity = action.payload.quantity
      })
    }

    default:
      return state
  }
}
