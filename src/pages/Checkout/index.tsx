import { useContext, MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import { CheckoutContainer } from './styles'
import { MapPinLine, CurrencyDollar } from 'phosphor-react'
import { CheckoutCartItem } from './components/CheckoutCartItem'
import { CartTotal } from './components/CartTotal'
import { BaseButtonContainerFullWidth } from './components/CartTotal/BaseButton/styles'
import { useTheme } from 'styled-components'
import { PaymentMethodCard } from './components/PaymentMethodCard'

export function Checkout() {
  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate()
  const theme = useTheme()
  const fontSizeConfirmButton = theme['text-s']
  const backgroundColorConfirmButton = theme.yellow

  const DELIVERY_COST = 3

  const itemsTotal = cartItems.reduce((totalSum, currentItem) => {
    return totalSum + currentItem.price * currentItem.quantity
  }, 0)

  function handleSubmit(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    navigate('/')
  }

  return (
    <CheckoutContainer>
      <div className="info-container">
        <h2>Complete seu pedido</h2>
        <div className="address-info-container">
          <div>
            <MapPinLine size={24} color="#C47F17" />
            <div>
              <h3>Endereço de entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>
          <div>
            <div className="input-row">
              <input id="cep" type="text" placeholder="CEP" />
            </div>
            <div className="input-row">
              <input id="rua" type="text" placeholder="Rua" />
            </div>
            <div className="input-row">
              <input id="numero" type="text" placeholder="Número" />
              <input
                id="complemento"
                type="text"
                placeholder="Complemento"
                className="optional"
              />
            </div>
            <div className="input-row">
              <input id="bairro" type="text" placeholder="Bairro" />
              <input id="cidade" type="text" placeholder="Cidade" />
              <input id="uf" type="text" placeholder="UF" />
            </div>
          </div>
        </div>
        <div className="payment-info-container">
          <div>
            <CurrencyDollar size={24} color="#8047F8" />
            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>
          <div className="payment-methods-container">
            <PaymentMethodCard
              inputId="credit-card"
              inputValue="credit-card"
            ></PaymentMethodCard>
            <PaymentMethodCard
              inputId="debit-card"
              inputValue="debit-card"
            ></PaymentMethodCard>
            <PaymentMethodCard
              inputId="cash"
              inputValue="cash"
            ></PaymentMethodCard>
          </div>
        </div>
      </div>
      <div className="cart-itens-container">
        <h2>Cafés selecionados</h2>
        <div>
          <ul>
            {cartItems.map((cartItem) => {
              return (
                <CheckoutCartItem
                  key={cartItem.productId}
                  cartItem={cartItem}
                />
              )
            })}
          </ul>
          {cartItems.length ? (
            <CartTotal
              itemsTotal={itemsTotal}
              deliveryCost={DELIVERY_COST}
            ></CartTotal>
          ) : (
            ''
          )}
          {cartItems.length ? (
            <BaseButtonContainerFullWidth
              onClick={handleSubmit}
              backgroundColor={backgroundColorConfirmButton}
              color="#FFF"
              type="submit"
              fontWeight="bold"
              fontSize={fontSizeConfirmButton}
            >
              CONFIRMAR PEDIDO
            </BaseButtonContainerFullWidth>
          ) : (
            ''
          )}
        </div>
      </div>
    </CheckoutContainer>
  )
}
