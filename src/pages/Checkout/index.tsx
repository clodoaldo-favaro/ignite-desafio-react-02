import { CheckoutContainer } from './styles'
import { MapPinLine, CurrencyDollar } from 'phosphor-react'

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <h2>Complete seu pedido</h2>
        <div>
          <div>
            <MapPinLine size={24} color="#C47F17" />
            <div>
              <h3>Endereço de entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>
          <div>
            <div className="input-row">
              <input type="text" placeholder="CEP" />
            </div>
            <div className="input-row">
              <input type="text" placeholder="Rua" />
            </div>
            <div className="input-row">
              <input type="text" placeholder="Número" />
              <input
                type="text"
                placeholder="Complemento"
                className="optional"
              />
            </div>
            <div className="input-row">
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="UF" />
            </div>
          </div>
        </div>
        <div>
          <div>
            <CurrencyDollar size={24} color="#8047F8" />
            <div>
              <h3>Forma de pagamento</h3>
              <p>Informe a forma de pagamento</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2>Cafés selecionados</h2>
        <div>asdas</div>
      </div>
    </CheckoutContainer>
  )
}
