import {
  PaymentMethodCardContainer,
  MoneyIconPurple,
  CardIconPurple,
  BankIconPurple,
} from './style'

interface PaymentMethodCardProps {
  paymentMethod: 'credit-card' | 'debit-card' | 'cash'
}

export function PaymentMethodCard({ paymentMethod }: PaymentMethodCardProps) {
  const paymentMethodsNames = {
    'credit-card': 'CARTÃO DE CRÉDITO',
    'debit-card': 'CARTÃO DE DÉBITO',
    cash: 'DINHEIRO',
  }

  return (
    <PaymentMethodCardContainer>
      <input type="radio" />

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
}
