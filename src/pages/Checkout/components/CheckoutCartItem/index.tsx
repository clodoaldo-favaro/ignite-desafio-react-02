import { CartItemContainer } from './styles'
import { CartItem } from '../../../../reducers/cart/reducer'
import { NumericInput } from '../../../../components/NumericInput'
import { CartContext } from '../../../../contexts/CartContext'
import { useContext } from 'react'
import {
  BaseButtonContainerNoShadow,
  TrashPurple,
} from '../CartTotal/BaseButton/styles'

interface CartItemProps {
  cartItem: CartItem
}

export function CheckoutCartItem({
  cartItem: { id, productId, name, price, quantity, imgSrc },
}: CartItemProps) {
  const total = (price * quantity).toFixed(2).replace('.', ',')
  const { updateCartItem, removeFromCart } = useContext(CartContext)

  function handleIncrement() {
    updateCartItem(id, quantity + 1)
  }

  function handleDecrement() {
    debugger
    const newQuantity = quantity - 1
    if (newQuantity === 0) {
      removeFromCart(id)
    } else {
      updateCartItem(id, newQuantity)
    }
  }

  function handleOnClickRemove() {
    removeFromCart(id)
  }

  return (
    <CartItemContainer>
      <div>
        <img src={imgSrc} alt="" />
      </div>
      <div>
        <div>
          <p>{name}</p>
          <p>R$ {total}</p>
        </div>
        <div>
          <NumericInput
            quantity={quantity}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          ></NumericInput>
          <BaseButtonContainerNoShadow
            type="button"
            onClick={handleOnClickRemove}
          >
            <TrashPurple size={24}></TrashPurple>
            <span>REMOVER</span>
          </BaseButtonContainerNoShadow>
        </div>
      </div>
    </CartItemContainer>
  )
}
