import { IntroContainer, FeaturesContainer } from './styles'
import coffeePic from '../../../../assets/coffee-intro.svg'

export function Intro() {
  return (
    <IntroContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
      </div>
      <img src={coffeePic} alt="" />
    </IntroContainer>
  )
}
