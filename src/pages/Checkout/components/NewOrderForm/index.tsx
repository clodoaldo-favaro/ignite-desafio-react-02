import { MapPinLine, CurrencyDollar } from 'phosphor-react'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CartContext } from '../../../../contexts/CartContext'
import { FormContainer } from './styles'
import { PaymentMethodCard } from '../PaymentMethodCard'
import { CheckoutCartItem } from '../CheckoutCartItem'
import { CartTotal } from '../CartTotal'
import { BaseButtonContainerFullWidth } from '../CartTotal/BaseButton/styles'
import { useTheme } from 'styled-components'

export function NewOrderForm() {
  const { cartItems } = useContext(CartContext)
  const { register } = useFormContext()
  const theme = useTheme()
  const fontSizeConfirmButton = theme['text-s']
  const backgroundColorConfirmButton = theme.yellow

  const DELIVERY_COST = 3

  const itemsTotal = cartItems.reduce((totalSum, currentItem) => {
    return totalSum + currentItem.price * currentItem.quantity
  }, 0)

  return (
    <FormContainer>
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
              <input
                id="cep"
                type="text"
                placeholder="CEP"
                {...register('cep')}
              />
            </div>
            <div className="input-row">
              <input
                id="rua"
                type="text"
                placeholder="Rua"
                {...register('rua')}
              />
            </div>
            <div className="input-row">
              <input
                id="numero"
                type="text"
                placeholder="Número"
                {...register('numero')}
              />
              <div className="optional-input-wrapper">
                <input
                  id="complemento"
                  type="text"
                  placeholder="Complemento"
                  {...register('complemento')}
                />
                <span className="optional">Opcional</span>
              </div>
            </div>
            <div className="input-row">
              <input
                id="bairro"
                type="text"
                placeholder="Bairro"
                {...register('bairro')}
              />
              <input
                id="cidade"
                type="text"
                placeholder="Cidade"
                {...register('cidade')}
              />
              <input id="uf" type="text" placeholder="UF" {...register('uf')} />
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
              id="credit-card"
              value="credit-card"
              paymentMethod="credit-card"
              {...register('paymentMethod')}
            ></PaymentMethodCard>
            <PaymentMethodCard
              id="debit-card"
              value="debit-card"
              paymentMethod="debit-card"
              {...register('paymentMethod')}
            ></PaymentMethodCard>
            <PaymentMethodCard
              id="cash"
              value="cash"
              paymentMethod="cash"
              {...register('paymentMethod')}
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
    </FormContainer>
  )
}
