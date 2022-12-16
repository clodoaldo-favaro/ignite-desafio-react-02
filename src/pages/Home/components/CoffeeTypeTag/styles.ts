import styled from 'styled-components'

export const CoffeeTypeTagContainer = styled.span`
  padding: 0.4rem 0.5rem;
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  border-radius: 100px;
  font-weight: bold;
  text-transform: uppercase;

  font-size: 0.625rem;
  line-height: 1.3;
`
