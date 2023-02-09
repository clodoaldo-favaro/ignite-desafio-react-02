import { HomeContainer } from './styles'
import { Intro } from './components/Intro'
import { CoffeeMenu } from './components/CoffeeMenu'
import { CartItem } from '../../components/Header'

interface HomeProps {
  onAddToCart: (item: CartItem) => void
}

export function Home({ onAddToCart }: HomeProps) {
  function handleAddToCart(cartItem: CartItem) {
    onAddToCart(cartItem)
  }

  return (
    <HomeContainer>
      <Intro />
      <CoffeeMenu onAddToCart={handleAddToCart} />
    </HomeContainer>
  )
}
