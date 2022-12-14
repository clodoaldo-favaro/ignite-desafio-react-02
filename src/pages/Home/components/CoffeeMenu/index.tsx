import { CoffeeMenuContainer } from './styles'
import { CoffeeCard } from '../CoffeeCard'
import imgExpressoTradicional from '../../../../assets/coffee-menu/expresso-tradicional.svg'

export function CoffeeMenu() {
  return (
    <CoffeeMenuContainer>
      <h2>Nossos cafés</h2>
      <div>
        <CoffeeCard
          id="1"
          name="Expresso Tradicional"
          imgSrc={imgExpressoTradicional}
          description="O tradicional café feito com água quente e grãos moídos"
          types={[{ id: '1', description: 'tradicional' }]}
        ></CoffeeCard>
      </div>
    </CoffeeMenuContainer>
  )
}
