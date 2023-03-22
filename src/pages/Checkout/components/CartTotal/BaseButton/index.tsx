import { BaseButtonContainer, BaseButtonProps } from './styles'

export function BaseButton({ backgroundColor }: BaseButtonProps) {
  return (
    <BaseButtonContainer
      backgroundColor={backgroundColor}
    ></BaseButtonContainer>
  )
}
