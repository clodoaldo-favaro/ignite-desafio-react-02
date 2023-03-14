import { HeaderContainer } from './styles'
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import mapPinFill from '../../assets/map-pin-fill.svg'
import cart from '../../assets/cart.svg'

import { NavLink } from 'react-router-dom'
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  imgSrc: string
}

export function Header() {
  const { cartItems } = useContext(CartContext)
  const counter = cartItems.length

  return (
    <HeaderContainer>
      <nav>
        <ul>
          <li>
            <NavLink to="/" title="Página inicial">
              <img src={logoCoffeeDelivery} alt="" />
            </NavLink>
          </li>
          <div>
            <li>
              <img src={mapPinFill} alt="" />
              <span>Porto Alegre, RS</span>
            </li>
            <li>
              <NavLink
                to={counter > 0 ? '/checkout' : '/'}
                title="Checkout"
                state={{ cartItems }}
              >
                <img src={cart} alt="" />
                {counter > 0 && <span>{counter}</span>}
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>
    </HeaderContainer>
  )
}
