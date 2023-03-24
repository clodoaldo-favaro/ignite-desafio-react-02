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
          <div className="inner"></div>
        </div>
      </div>
      <div>
        <img src={imgDelivery} alt="" />
      </div>
    </OrderSuccessContainer>
  )
}
