import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 2.5rem;

  .input-row {
    display: flex;
    gap: 0.75rem;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 1rem;
    }
  }

  h2 {
    font-size: ${(props) => props.theme['title-xs']};
    margin-bottom: 1rem;
  }

  > div > div {
    background: ${(props) => props.theme.card};
    padding: 2.5rem;
    margin-bottom: 0.75rem;
  }

  > div:first-child {
    flex-grow: 1;

    > div {
      > div:first-child {
        display: flex;
        gap: 0.5rem;
        margin-bottom: 2rem;

        div {
          h3 {
            font-size: ${(props) => props.theme['title-xs']};
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            color: ${(props) => props.theme.subtitle};
            margin-bottom: 0.25rem;
          }

          p {
            font-size: ${(props) => props.theme['text-s']};
            font-family: 'Roboto', sans-serif;
            color: ${(props) => props.theme.text};
          }
        }
      }

      > div:last-child {
        display: flex;
        flex-direction: column;
        row-gap: 1rem;
      }
    }
  }

  > div:last-child {
    width: 40%;

    > div {
      border-radius: 6px 44px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    div:first-child {
      width: 100%;
    }

    div:last-child {
      width: 100%;
    }
  }
`
