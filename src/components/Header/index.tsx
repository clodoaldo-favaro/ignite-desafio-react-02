import { HeaderContainer } from './styles'
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffeeDelivery} alt="" />
    </HeaderContainer>
  )
}
