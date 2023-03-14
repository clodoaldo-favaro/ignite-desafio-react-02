import { createContext, ReactNode, useReducer } from 'react'

import {
  addToCartAction,
  removeFromCartAction,
  updateCartAction,
} from '../reducers/cart/actions'

import { CartItem, cartReducer } from '../reducers/cart/reducer'

interface CartContextType {
  cartItems: CartItem[]
  addToCart: (newItem: CartItem) => void
  removeFromCart: (itemId: string) => void
  updateCartItem: (itemId: string, quantity: number) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, { cartItems: [] })
  const { cartItems } = cartState

  function addToCart(newItem: CartItem) {
    dispatch(addToCartAction(newItem))
  }

  function removeFromCart(itemId: string) {
    dispatch(removeFromCartAction(itemId))
  }

  function updateCartItem(itemId: string, quantity: number) {
    dispatch(updateCartAction(itemId, quantity))
  }

  return (
    <CartContext.Provider
      value={{
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
