import { useContext, useState, useReducer, Reducer } from 'react'
import { CoffeeCardContainer } from './styles'
import { CoffeeTypeTag } from '../CoffeeTypeTag'
import { CartItem } from '../../../../reducers/cart/reducer'
import { NumericInput } from '../../../../components/NumericInput'
import CartWhite from '../../../../assets/cart-white.svg'
import { CartContext } from '../../../../contexts/CartContext'

export interface CoffeeProps {
  id: string
  name: string
  description: string
  imgSrc: string
  types: string[]
  price: number
}

interface CoffeeCardProps {
  coffee: CoffeeProps
}

export function CoffeeCard({
  coffee: { id, name, description, imgSrc, types, price },
}: CoffeeCardProps) {
  const formattedPrice = price.toFixed(2).replace('.', ',')
  const [coffeeQuantity, setCoffeeQuantity] = useState(1)
  const { addToCart, cartItems } = useContext(CartContext)

  function increment() {
    setCoffeeQuantity(coffeeQuantity + 1)
  }

  function decrement() {
    if (coffeeQuantity > 0) {
      setCoffeeQuantity(coffeeQuantity - 1)
    }
  }

  function handleAddToCart() {
    const nextId = cartItems.length
    const newItem: CartItem = {
      id: nextId,
      productId: id,
      name,
      imgSrc,
      price,
      quantity: coffeeQuantity,
    }

    addToCart(newItem)
  }

  return (
    <CoffeeCardContainer>
      <div>
        <img src={imgSrc} alt="" />
        <ul>
          {types.map((type) => (
            <li key={type}>
              <CoffeeTypeTag key={type} type={type} />
            </li>
          ))}
        </ul>
        <h4>{name}</h4>
        <p>{description}</p>
        <footer>
          <div>
            <p>{formattedPrice}</p>
          </div>
          <div>
            <NumericInput
              quantity={coffeeQuantity}
              onDecrement={decrement}
              onIncrement={increment}
            />
            <button
              onClick={handleAddToCart}
              title="Clique para adicionar ao carrinho"
            >
              <img src={CartWhite} alt="" />
            </button>
          </div>
        </footer>
      </div>
    </CoffeeCardContainer>
  )
}
