import { HeaderContainer } from './styles'
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import mapPinFill from '../../assets/map-pin-fill.svg'
import cart from '../../assets/cart.svg'

import { NavLink } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'

export function Header() {
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
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
