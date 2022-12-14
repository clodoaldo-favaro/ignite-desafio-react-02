import { CoffeeCardContainer } from './styles'

interface CoffeeType {
  id: string
  description: string
}

export interface CoffeeCardProps {
  id: string
  name: string
  description: string
  imgSrc: string
  types: CoffeeType[]
}

export function CoffeeCard(props: CoffeeCardProps) {
  return (
    <CoffeeCardContainer>
      <img src={props.imgSrc} alt="" />
    </CoffeeCardContainer>
  )
}
