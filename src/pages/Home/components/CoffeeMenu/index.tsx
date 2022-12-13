import { CoffeeCard, CoffeeMenuContainer } from './styles'
import imgExpressoTradicional from '../../../../assets/coffee-menu/expresso-tradicional.svg'

export function CoffeeMenu() {
  return (
    <CoffeeMenuContainer>
      <h2>Nossos cafés</h2>
      <div>
        <CoffeeCard>
          <img src={imgExpressoTradicional} alt="" />
        </CoffeeCard>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </div>
    </CoffeeMenuContainer>
  )
}
