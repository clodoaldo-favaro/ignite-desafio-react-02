import React from 'react'

import {
  PaymentMethodCardContainer,
  MoneyIconPurple,
  CardIconPurple,
  BankIconPurple,
} from './style'

interface PaymentMethodCardProps extends React.HTMLProps<HTMLInputElement> {
  paymentMethod: 'credit-card' | 'debit-card' | 'cash'
}

const PaymentMethodCard = React.forwardRef<
  HTMLInputElement,
  PaymentMethodCardProps
>(({ paymentMethod, ...inputProps }, ref) => {
  const paymentMethodsNames = {
    'credit-card': 'CARTÃO DE CRÉDITO',
    'debit-card': 'CARTÃO DE DÉBITO',
    cash: 'DINHEIRO',
  }

  return (
    <PaymentMethodCardContainer>
      <input
        type="radio"
        ref={ref}
        id={inputProps.id}
        value={inputProps.value}
        {...inputProps}
      />

      <div>
        {paymentMethod === 'credit-card' ? (
          <CardIconPurple size={24} />
        ) : paymentMethod === 'debit-card' ? (
          <BankIconPurple size={24} />
        ) : (
          <MoneyIconPurple size={24} />
        )}

        <span>{paymentMethodsNames[paymentMethod]}</span>
      </div>
    </PaymentMethodCardContainer>
  )
})

PaymentMethodCard.displayName = 'PaymentMethodCard'

export { PaymentMethodCard }
