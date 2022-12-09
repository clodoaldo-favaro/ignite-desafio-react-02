import { IntroContainer, FeaturesContainer, Feature } from './styles'
import coffeePic from '../../../../assets/coffee-intro.svg'
import shoppingCart from '../../../../assets/cart-white.svg'
import box from '../../../../assets/box.svg'
import coffee from '../../../../assets/coffee.svg'
import clock from '../../../../assets/clock.svg'

export function Intro() {
  return (
    <IntroContainer>
      <div className="left-column">
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>

        <FeaturesContainer>
          <Feature>
            <div>
              <img src={shoppingCart} alt="" />
            </div>
            <span>Compra simples e segura</span>
          </Feature>
          <Feature>
            <div>
              <img src={box} alt="" />
            </div>
            <span>Embalagem mantém o café intacto</span>
          </Feature>
          <Feature>
            <div>
              <img src={clock} alt="" />
            </div>
            <span>Entrega rápida e rastreada</span>
          </Feature>
          <Feature>
            <div>
              <img src={coffee} alt="" />
            </div>
            <span>O café chega fresquinho até você</span>
          </Feature>
        </FeaturesContainer>
      </div>
      <img src={coffeePic} alt="" />
    </IntroContainer>
  )
}
