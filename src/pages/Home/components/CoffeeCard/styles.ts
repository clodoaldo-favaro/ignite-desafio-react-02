import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  width: 100%;
  max-width: 16rem;
  height: 19.375rem;

  padding: 0 1.5rem 1.25rem 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${(props) => props.theme.card};

  border-radius: 6px 36px 6px 36px;

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    gap: 0.4rem;
    position: relative;
    top: -0.5rem;
  }

  img {
    width: 7.5rem;
    height: 7.5rem;

    position: relative;
    top: -1.25rem;
  }
`
