import { NumericInputContainer } from './styles'
import { Minus, Plus } from 'phosphor-react'

interface NumericInputProps {
  quantity: number
  onIncrement: () => void
  onDecrement: () => void
}

export function NumericInput({
  quantity,
  onIncrement,
  onDecrement,
}: NumericInputProps) {
  function handleIncrement() {
    onIncrement()
  }

  function handleDecrement() {
    onDecrement()
  }

  return (
    <NumericInputContainer>
      <Minus size={14} weight={'bold'} onClick={handleDecrement} />
      <span>{quantity}</span>
      <Plus size={14} weight={'bold'} onClick={handleIncrement} />
    </NumericInputContainer>
  )
}
