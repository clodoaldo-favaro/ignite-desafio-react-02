import { CartItemContainer } from './styles'
import { CartItem } from '../../../../reducers/cart/reducer'
import { NumericInput } from '../../../../components/NumericInput'
import { CartContext } from '../../../../contexts/CartContext'
import { useContext } from 'react'

interface CartItemProps {
  cartItem: CartItem
}

export function CheckoutCartItem({
  cartItem: { id, productId, name, price, quantity, imgSrc },
}: CartItemProps) {
  const total = (price * quantity).toFixed(2).replace('.', ',')
  const { updateCartItem, removeFromCart } = useContext(CartContext)

  function handleUpdateItemQuantity() {
    if (quantity === 0) {
      removeFromCart(id)
    } else {
      updateCartItem(id, quantity)
    }
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
            onIncrement={handleUpdateItemQuantity}
            onDecrement={handleUpdateItemQuantity}
          ></NumericInput>
        </div>
      </div>
    </CartItemContainer>
  )
}
