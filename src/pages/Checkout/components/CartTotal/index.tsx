import { CartTotalContainer } from './styles'

interface CartTotalProps {
  itemsTotal: number
  deliveryCost: number
}

export function CartTotal({ itemsTotal, deliveryCost }: CartTotalProps) {
  const formattedTotalItems = itemsTotal.toFixed(2).replace('.', ',')
  const formattedDeliveryCost = deliveryCost.toFixed(2).replace('.', ',')
  const formattedTotal = (itemsTotal + deliveryCost)
    .toFixed(2)
    .replace('.', ',')

  return (
    <CartTotalContainer>
      <div>
        <span>Total de itens</span>
        <span>R$ {formattedTotalItems}</span>
      </div>
      <div>
        <span>Entrega</span>
        <span>R$ {formattedDeliveryCost}</span>
      </div>
      <div>
        <span>Total</span>
        <span>R$ {formattedTotal}</span>
      </div>
    </CartTotalContainer>
  )
}
