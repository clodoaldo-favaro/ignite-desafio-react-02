import styled from 'styled-components'

export const LayoutContainer = styled.div`
  background: ${(props) => props.theme.background};

  display: flex;
  flex-direction: column;

  padding: 0 10rem;

  @media (min-width: 1600px) {
    padding: 0 20rem;
  }
`
