import { CheckoutContainer } from './styles'
import { MapPinLine, CurrencyDollar } from 'phosphor-react'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { CartItem } from '../../components/Header'

export function Checkout() {
  const location = useLocation()
  const { state } = location.cartItems
  const { cartItems, setCartItems } = useState<CartItem[]>([])
  console.log('entering checkout')
  console.log(state)
  console.log(cartItems)

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
          <div className="input-row">
            <div className="card">
              <input id="cartao_debito" type="radio" name="payment" />
            </div>
            <div className="card">
              <input id="dinheiro" type="radio" name="payment" />
            </div>
          </div>
        </div>
      </div>
      <div className="cart-itens-container">
        <h2>Cafés selecionados</h2>
        <div>asdas</div>
      </div>
    </CheckoutContainer>
  )
}
