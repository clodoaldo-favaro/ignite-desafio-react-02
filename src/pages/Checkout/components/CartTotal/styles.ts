import styled from 'styled-components'

export const CartTotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.84375rem;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    span:first-child {
      font-size: ${(props) => props.theme['text-s']};
    }
    span:last-child {
      font-size: ${(props) => props.theme['text-m']};
    }
  }

  > div:last-child > span {
    font-weight: bold;
    font-size: ${(props) => props.theme['text-l']};
  }
`
