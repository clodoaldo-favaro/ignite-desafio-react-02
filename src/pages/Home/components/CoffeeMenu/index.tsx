import { CoffeeMenuContainer } from './styles'
import { CoffeeCard, CoffeeProps } from '../CoffeeCard'
import imgExpressoTradicional from '../../../../assets/coffee-menu/expresso-tradicional.svg'
import imgExpressoAmericano from '../../../../assets/coffee-menu/expresso-americano.svg'
import imgExpressoCremoso from '../../../../assets/coffee-menu/expresso-cremoso.svg'
import imgExpressoGelado from '../../../../assets/coffee-menu/expresso-gelado.svg'
import { useState } from 'react'

export function CoffeeMenu() {
  const [coffees, setCoffees] = useState<CoffeeProps[]>([
    {
      id: '1',
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      imgSrc: imgExpressoTradicional,
      types: ['TRADICIONAL'],
      price: 9.9,
      quantity: 1,
    },
    {
      id: '2',
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      imgSrc: imgExpressoAmericano,
      types: ['TRADICIONAL'],
      price: 9.9,
      quantity: 1,
    },
    {
      id: '3',
      name: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      imgSrc: imgExpressoCremoso,
      types: ['TRADICIONAL'],
      price: 9.9,
      quantity: 1,
    },
    {
      id: '4',
      name: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      imgSrc: imgExpressoGelado,
      types: ['TRADICIONAL', 'GELADO'],
      price: 9.9,
      quantity: 1,
    },
  ])

  return (
    <CoffeeMenuContainer>
      <h2>Nossos cafés</h2>
      <div>
        {coffees.map((coffee) => {
          return <CoffeeCard key={coffee.id} {...coffee} />
        })}
      </div>
    </CoffeeMenuContainer>
  )
}
