import styled from 'styled-components'

export const CoffeeMenuContainer = styled.section`
  h2 {
    margin-bottom: 3.375rem;

    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }

  > div {
    display: grid;
    row-gap: 2.5rem;
    column-gap: 2rem;

    grid-template-columns: repeat(auto-fit, 16rem);
    justify-content: space-between;

    @media screen and (max-width: 768px) {
      justify-content: center;
    }
  }
`
