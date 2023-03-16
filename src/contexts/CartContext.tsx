import { createContext, ReactNode, useReducer } from 'react'

import {
  addToCartAction,
  removeFromCartAction,
  updateCartAction,
} from '../reducers/cart/actions'

import {
  CartItem,
  cartReducer,
  CreateCartItemData,
} from '../reducers/cart/reducer'

interface CartContextType {
  cartItems: CartItem[]
  nextId: number
  addToCart: (newItem: CreateCartItemData) => void
  removeFromCart: (itemId: number) => void
  updateCartItem: (itemId: number, quantity: number) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    cartItems: [],
    nextId: 0,
  })
  const { cartItems, nextId } = cartState

  function addToCart(newItem: CreateCartItemData) {
    dispatch(addToCartAction(newItem))
  }

  function removeFromCart(itemId: number) {
    dispatch(removeFromCartAction(itemId))
  }

  function updateCartItem(itemId: number, quantity: number) {
    dispatch(updateCartAction(itemId, quantity))
  }

  return (
    <CartContext.Provider
      value={{
        nextId,
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
