import styled from 'styled-components'

export const CartItemContainer = styled.li`
  display: flex;
  align-items: center;
  padding: 0.5rem 0.25rem 2rem 0.25rem;
  gap: 1.25rem;

  border-bottom: 1px solid ${(props) => props.theme.button};
  margin-bottom: 1.5rem;

  > div:first-of-type {
    width: 4rem;
    height: 4rem;

    img {
      width: 100%;
      height: 100%;
    }
  }

  > div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 0.5rem;

    > div {
      display: flex;
      gap: 0.8rem;
    }

    > div:first-of-type {
      justify-content: space-between;
      align-items: center;
      font-size: ${(props) => props.theme['text-m']};

      > p:first-of-type {
        color: ${(props) => props.theme.subtitle};
      }

      > p:last-of-type {
        color: ${(props) => props.theme.text};
        font-weight: bold;
      }
    }
  }
`
