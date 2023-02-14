import { HomeContainer } from './styles'
import { Intro } from './components/Intro'
import { CoffeeMenu } from './components/CoffeeMenu'
import { CartItem } from '../../components/Header'
import { useLayoutContext } from '../../layouts/DefaultLayout'

export function Home() {
  const [cartItems, setCartItems] = useLayoutContext()

  function handleAddToCart(item: CartItem) {
    debugger
    const itemExists = cartItems.find((cartItem) => cartItem.id === item.id)

    if (itemExists) {
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + item.quantity }
        }

        return cartItem
      })

      setCartItems(updatedCartItems)
    } else {
      setCartItems([...cartItems, item])
    }
  }

  return (
    <HomeContainer>
      <Intro />
      <CoffeeMenu onAddToCart={handleAddToCart} />
    </HomeContainer>
  )
}
