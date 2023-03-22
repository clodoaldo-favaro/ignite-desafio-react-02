import styled from 'styled-components'
import { Trash } from 'phosphor-react'
import { ButtonHTMLAttributes } from 'react'

export interface BaseButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: string
  color?: string
  fontWeight?: 'normal' | 'bold'
  fontSize?: string
}

export const BaseButtonContainer = styled.button<BaseButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  padding: 0.8rem;
  text-transform: uppercase;
  background-color: ${(props) => props.backgroundColor || props.theme.button};
  color: ${(props) => props.color || props.theme.text};
  font-weight: ${(props) => props.fontWeight || 'normal'};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  border: none;
  font-size: ${(props) => props.fontSize || props.theme['text-xs']};
`

export const BaseButtonContainerFullWidth = styled(BaseButtonContainer)`
  width: 100%;
`

export const BaseButtonContainerNoShadow = styled(BaseButtonContainer)`
  box-shadow: none;
`

export const TrashPurple = styled(Trash)`
  color: ${(props) => props.theme.purple};
`
