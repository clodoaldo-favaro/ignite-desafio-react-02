import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'

import {
  ActionTypes,
  addNewCartItemAction,
  removeCartItemAction,
  updateCartItemAction,
} from '../reducers/cart/actions'

import { CartItem, cartReducer } from '../reducers/cart/reducer'

interface CreateCartItemData {
  id: string
  productId: string
  description: string
  price: number
  quantity: number
}

interface CartContextType {}
