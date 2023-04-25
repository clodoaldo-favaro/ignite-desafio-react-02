import { useContext, MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import { CheckoutContainer } from './styles'
import { MapPinLine, CurrencyDollar } from 'phosphor-react'
import { CheckoutCartItem } from './components/CheckoutCartItem'
import { CartTotal } from './components/CartTotal'
import { BaseButtonContainerFullWidth } from './components/CartTotal/BaseButton/styles'
import { useTheme } from 'styled-components'
import { PaymentMethodCard } from './components/PaymentMethodCard'
import * as zod from 'zod'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { NewOrderForm } from './components/NewOrderForm'

const newOrderFormValidationSchema = zod.object({
  cep: zod.string().min(8, 'CEP inválido').max(8, 'CEP inválido'),
  rua: zod.string().min(1, 'Rua inválida'),
  numero: zod.string().min(1, 'Número inválido'),
  cidade: zod.string().min(1, 'Cidade inválida'),
  uf: zod.string().min(2, 'UF inválido').max(2, 'UF inválido'),
  complemento: zod.optional(zod.string()),
  paymentMethod: zod.string().min(1, 'Selecione uma forma de pagamento'),
})

type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>

export function Checkout() {
  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate()
  const theme = useTheme()
  const fontSizeConfirmButton = theme['text-s']
  const backgroundColorConfirmButton = theme.yellow

  const DELIVERY_COST = 3

  const itemsTotal = cartItems.reduce((totalSum, currentItem) => {
    return totalSum + currentItem.price * currentItem.quantity
  }, 0)

  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
    defaultValues: {
      cep: '',
      rua: '',
      numero: '',
      cidade: '',
      uf: '',
      complemento: '',
      paymentMethod: 'credit-card',
    },
  })

  const { handleSubmit, watch, reset } = newOrderForm

  function handleCreateNewOrder(data: NewOrderFormData) {
    console.log(data)
    reset()
    navigate('/order-success')
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleCreateNewOrder)} action="">
        <FormProvider {...newOrderForm}>
          <NewOrderForm />
        </FormProvider>
      </form>
    </CheckoutContainer>
  )
}
