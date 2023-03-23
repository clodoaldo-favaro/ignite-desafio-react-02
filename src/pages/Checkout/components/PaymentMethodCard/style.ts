import styled from 'styled-components'
import { CreditCard, Bank, Money } from 'phosphor-react'

export const PaymentMethodCardCardDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
`

export const PaymentMethodCardContainer = styled.label`
  flex: 1 1 0;
  width: 0;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;

    background-color: ${(props) => props.theme.button};
    color: ${(props) => props.theme.text};

    border-radius: 6px;
    border: 1px solid transparent;

    padding: 1rem;

    &:hover {
      cursor: pointer;
      background-color: ${(props) => props.theme.hover};
      border: 1px solid ${(props) => props.theme['purple-light']};
    }
  }

  input[type='radio'] {
    display: none;
  }

  input[type='radio']:checked + div {
    background-color: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme.purple};
  }
`

export const CardIconPurple = styled(CreditCard)`
  color: ${(props) => props.theme.purple};
`
export const BankIconPurple = styled(Bank)`
  color: ${(props) => props.theme.purple};
`
export const MoneyIconPurple = styled(Money)`
  color: ${(props) => props.theme.purple};
`
