import { useState } from 'react'
import { Outlet, useOutletContext } from 'react-router-dom'
import { CartItem, Header } from '../../components/Header'
import { LayoutContainer } from './styles'

type LayoutContext = [CartItem[], (cartItems: CartItem[]) => void]

export function DefaultLayout() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  return (
    <LayoutContainer>
      <Header cartItems={cartItems} />
      <Outlet context={[cartItems, setCartItems]} />
    </LayoutContainer>
  )
}

export function useLayoutContext() {
  return useOutletContext<LayoutContext>()
}
