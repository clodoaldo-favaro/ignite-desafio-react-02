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
  return (
    <CoffeeCardContainer>
      <img src={imgSrc} alt="" />
      <ul>
        {types.map((type) => (
          <li key={type}>
            <CoffeeTypeTag key={type} type={type} />
          </li>
        ))}
      </ul>
    </CoffeeCardContainer>
  )
}
