import styled from 'styled-components'

export const NumericInputContainer = styled.div`
  background: ${(props) => props.theme.button};
  border-radius: 6px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;

  color: ${(props) => props.theme.purple};

  span {
    color: ${(props) => props.theme.title};
  }

  svg {
    cursor: pointer;
  }
`
