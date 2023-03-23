import {
  PaymentMethodCardContainer,
  MoneyIconPurple,
  CardIconPurple,
  BankIconPurple,
} from './style'

interface PaymentMethodCardProps {
  inputId: string
  inputValue: 'credit-card' | 'debit-card' | 'cash'
}

export function PaymentMethodCard({
  inputId,
  inputValue,
}: PaymentMethodCardProps) {
  const paymentMethodsNames = {
    'credit-card': 'CARTÃO DE CRÉDITO',
    'debit-card': 'CARTÃO DE DÉBITO',
    cash: 'DINHEIRO',
  }

  return (
    <PaymentMethodCardContainer>
      <input
        type="radio"
        name="payment-method"
        id={inputId}
        value={inputValue}
      />

      <div>
        {inputValue === 'credit-card' ? (
          <CardIconPurple size={24} />
        ) : inputValue === 'debit-card' ? (
          <BankIconPurple size={24} />
        ) : (
          <MoneyIconPurple size={24} />
        )}

        <span>{paymentMethodsNames[inputValue]}</span>
      </div>
    </PaymentMethodCardContainer>
  )
}
