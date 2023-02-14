import { HeaderContainer } from './styles'
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import mapPinFill from '../../assets/map-pin-fill.svg'
import cart from '../../assets/cart.svg'

import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  imgSrc: string
}

interface HeaderProps {
  cartItems: CartItem[]
}

export function Header({ cartItems }: HeaderProps) {
  const counter = cartItems.length

  return (
    <HeaderContainer>
      <img src={logoCoffeeDelivery} alt="" />
      <nav>
        <div>
          <img src={mapPinFill} alt="" />
          <span>Porto Alegre, RS</span>
        </div>
        <NavLink to="/" title="Checkout">
          <img src={cart} alt="" />
          {counter > 0 && <span>{counter}</span>}
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
