import { HomeContainer } from './styles'
import { Intro } from './components/Intro'
import { CoffeeMenu } from './components/CoffeeMenu'
import { CartItem } from '../../components/Header'
import { useLayoutContext } from '../../layouts/DefaultLayout'

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <CoffeeMenu />
    </HomeContainer>
  )
}
