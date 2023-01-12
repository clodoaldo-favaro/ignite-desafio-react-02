import { CoffeeCardContainer } from './styles'
import { CoffeeTypeTag } from '../CoffeeTypeTag'

export interface CoffeeProps {
  id: string
  name: string
  description: string
  imgSrc: string
  types: string[]
  price: number
  quantity: number
}

export function CoffeeCard({
  id,
  name,
  description,
  imgSrc,
  types,
  price,
  quantity,
}: CoffeeProps) {
  const formattedPrice = price.toFixed(2).replace('.', ',')

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
        </footer>
      </div>
    </CoffeeCardContainer>
  )
}
