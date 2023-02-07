import { useState } from 'react'
import { CoffeeCardContainer } from './styles'
import { CoffeeTypeTag } from '../CoffeeTypeTag'
import { NumericInput } from '../../../../components/NumericInput'
import CartWhite from '../../../../assets/cart-white.svg'

export interface CoffeeProps {
  id: string
  name: string
  description: string
  imgSrc: string
  types: string[]
  price: number
}

export function CoffeeCard({
  id,
  name,
  description,
  imgSrc,
  types,
  price,
}: CoffeeProps) {
  const formattedPrice = price.toFixed(2).replace('.', ',')
  const [coffeeQuantity, setCoffeeQuantity] = useState(1)

  function increment() {
    setCoffeeQuantity(coffeeQuantity + 1)
  }

  function decrement() {
    if (coffeeQuantity > 0) {
      setCoffeeQuantity(coffeeQuantity - 1)
    }
  }

  function handleAddToCart() {
    console.log('adicionando ao carrinho')
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
            <button onClick={handleAddToCart}>
              <img src={CartWhite} />
            </button>
          </div>
        </footer>
      </div>
    </CoffeeCardContainer>
  )
}
