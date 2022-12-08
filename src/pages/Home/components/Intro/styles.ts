import styled from 'styled-components'

export const IntroContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5.875rem 0 6.75rem 0;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 50%;
  }

  img {
    max-width: 40%;
  }
`

export const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2.5rem;
  row-gap: 1.25rem;
`
