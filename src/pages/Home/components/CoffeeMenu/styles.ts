import styled from 'styled-components'

export const CoffeeMenuContainer = styled.section`
  h2 {
    margin-bottom: 3.375rem;
  }

  > div {
    display: grid;
    row-gap: 2.5rem;
    column-gap: 2rem;

    grid-template-columns: repeat(auto-fit, 16rem);
    justify-content: space-between;
  }
`
