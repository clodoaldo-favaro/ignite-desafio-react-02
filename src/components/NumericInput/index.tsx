import { NumericInputContainer } from './styles'
import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'

export function NumericInput() {
  const [amount, setAmount] = useState(1)

  return (
    <NumericInputContainer>
      <Minus size={14} weight={'bold'} />
      <span>{amount}</span>
      <Plus size={14} weight={'bold'} />
    </NumericInputContainer>
  )
}
