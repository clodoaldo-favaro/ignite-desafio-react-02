import styled from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 2.5rem;

  .payment-methods-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
    flex-direction: row !important;
    margin-top: 2rem;
  }

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

  #rua,
  #complemento,
  #cidade {
    flex-grow: 1;
  }

  > div:first-child {
    flex-grow: 1;

    input[type='text'] {
      background: ${(props) => props.theme.input};
      color: ${(props) => props.theme.text};
      padding: 0.75rem;
      border-radius: 4px;
      border: 1px solid ${(props) => props.theme.button};
      position: relative;
    }

    input[type='text']::placeholder {
      color: ${(props) => props.theme.label};
    }

    .optional-input-wrapper {
      width: 100%;
      display: flex;
      align-items: center;
      position: relative;
    }

    span.optional {
      font-style: italic;
      text-align: right;
      display: block;
      position: absolute;
      right: 0.75rem;
      color: ${(props) => props.theme.label};
    }

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

    .payment-methods-container {
      flex-direction: column !important;
    }
  }
`
