import { HomeContainer } from './styles'
import { Intro } from './components/Intro'
import { CoffeeMenu } from './components/CoffeeMenu'

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <CoffeeMenu />
    </HomeContainer>
  )
}
