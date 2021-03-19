import React from 'react'
import logo from '../../assets/logo.svg'
import { Container, Content } from './styles'

type HeaderProps = {
  onNewTransaction: () => void
}

export function Header(props: HeaderProps) {

  
  return (
    <Container>
      <Content>
        <img src={logo} alt="dt money" />

        <button type="button" onClick={props.onNewTransaction}>
          Nova transação
        </button>


      </Content>
    </Container>
  )
}
