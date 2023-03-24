import { OrderSuccessContainer } from './styles'
import imgDelivery from '../../assets/delivery-guy.svg'

export function OrderSuccess() {
  return (
    <OrderSuccessContainer>
      <div>
        <div className="header">
          <h2>Uhu! Pedido confirmado</h2>
          <p>Agora é só aguardar e logo o café chegará até você</p>
        </div>
        <div className="deliveryInfo">
          <div className="inner">
            <div className="row">
              <div className="icon-container purple-bg"></div>
              <div>
                <p>
                  Entrega em{' '}
                  <span className="bold">Rua João Daniel Martinelli, 102</span>
                </p>
                <p>Farrapos - Porto Alegre, RS</p>
              </div>
            </div>
            <div className="row">
              <div className="icon-container yellow-bg"></div>
              <div>
                <p>Previsão de entrega</p>
                <p className="bold">20 min - 30 min</p>
              </div>
            </div>
            <div className="row">
              <div className="icon-container yellow-dark-bg"></div>
              <div>
                <p>Pagamento na entrega</p>
                <p className="bold">Cartão de crédito</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={imgDelivery} alt="" />
      </div>
    </OrderSuccessContainer>
  )
}
