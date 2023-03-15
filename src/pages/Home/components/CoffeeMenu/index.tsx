import { CoffeeMenuContainer } from './styles'
import { CoffeeCard, CoffeeProps } from '../CoffeeCard'
import imgExpressoTradicional from '../../../../assets/coffee-menu/expresso-tradicional.svg'
import imgExpressoAmericano from '../../../../assets/coffee-menu/expresso-americano.svg'
import imgExpressoCremoso from '../../../../assets/coffee-menu/expresso-cremoso.svg'
import imgExpressoGelado from '../../../../assets/coffee-menu/expresso-gelado.svg'
import imgCafeComLeite from '../../../../assets/coffee-menu/leite.svg'
import imgLatte from '../../../../assets/coffee-menu/latte.svg'
import imgCapuccino from '../../../../assets/coffee-menu/capuccino.svg'
import imgMacchiato from '../../../../assets/coffee-menu/macchiato.svg'
import imgMocaccino from '../../../../assets/coffee-menu/mocaccino.svg'
import imgChocolateQuente from '../../../../assets/coffee-menu/chocolate-quente.svg'
import imgCubano from '../../../../assets/coffee-menu/cubano.svg'
import imgHavaiano from '../../../../assets/coffee-menu/havaiano.svg'
import imgArabe from '../../../../assets/coffee-menu/arabe.svg'
import imgIrlandes from '../../../../assets/coffee-menu/irlandes.svg'
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
    },
    {
      id: '2',
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      imgSrc: imgExpressoAmericano,
      types: ['TRADICIONAL'],
      price: 9.9,
    },
    {
      id: '3',
      name: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      imgSrc: imgExpressoCremoso,
      types: ['TRADICIONAL'],
      price: 9.9,
    },
    {
      id: '4',
      name: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      imgSrc: imgExpressoGelado,
      types: ['TRADICIONAL', 'GELADO'],
      price: 9.9,
    },
    {
      id: '5',
      name: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      imgSrc: imgCafeComLeite,
      types: ['TRADICIONAL', 'COM LEITE'],
      price: 9.9,
    },
    {
      id: '6',
      name: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      imgSrc: imgLatte,
      types: ['TRADICIONAL', 'COM LEITE'],
      price: 9.9,
    },
    {
      id: '7',
      name: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      imgSrc: imgCapuccino,
      types: ['TRADICIONAL', 'COM LEITE'],
      price: 9.9,
    },
    {
      id: '8',
      name: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      imgSrc: imgMacchiato,
      types: ['TRADICIONAL', 'COM LEITE'],
      price: 9.9,
    },
    {
      id: '9',
      name: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      imgSrc: imgMocaccino,
      types: ['TRADICIONAL', 'COM LEITE'],
      price: 9.9,
    },
    {
      id: '10',
      name: 'Chocolate quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      imgSrc: imgChocolateQuente,
      types: ['ESPECIAL', 'COM LEITE'],
      price: 9.9,
    },
    {
      id: '11',
      name: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      imgSrc: imgCubano,
      types: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
      price: 9.9,
    },
    {
      id: '12',
      name: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      imgSrc: imgHavaiano,
      types: ['ESPECIAL'],
      price: 9.9,
    },
    {
      id: '13',
      name: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      imgSrc: imgArabe,
      types: ['ESPECIAL'],
      price: 9.9,
    },
    {
      id: '14',
      name: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      imgSrc: imgIrlandes,
      types: ['ESPECIAL', 'ALCOÓLICO'],
      price: 9.9,
    },
  ])

  return (
    <CoffeeMenuContainer>
      <h2>Nossos cafés</h2>
      <div>
        {coffees.map((coffee) => {
          return <CoffeeCard key={coffee.id} coffee={coffee} />
        })}
      </div>
    </CoffeeMenuContainer>
  )
}
