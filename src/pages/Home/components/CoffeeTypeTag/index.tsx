import { CoffeeTypeTagContainer } from './styles'

interface CoffeeTypeTagProps {
  type: string
}

export function CoffeeTypeTag({ type }: CoffeeTypeTagProps) {
  return <CoffeeTypeTagContainer>{type}</CoffeeTypeTagContainer>
}
