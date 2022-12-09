import styled from 'styled-components'

export const IntroContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3.5rem;

  padding: 5.875rem 0 6.75rem 0;

  & .left-column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2.5rem;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
`

export const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  font-size: ${(props) => props.theme['text-m']};
  color: ${(props) => props.theme.text};

  &:first-of-type div {
    background: ${(props) => props.theme['yellow-dark']};
  }

  &:nth-of-type(2) div {
    background: ${(props) => props.theme.text};
  }

  &:nth-of-type(3) div {
    background: ${(props) => props.theme.yellow};
  }

  &:nth-of-type(4) div {
    background: ${(props) => props.theme.purple};
  }

  div {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 1rem;
    }
  }
`
