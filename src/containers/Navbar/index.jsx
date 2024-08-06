import React from 'react'
import {Header, Nav} from './styles'
import{ MyButton }from '../../components'

function Navbar() {
  return (
    <Header>
        <h2>Logo</h2>
        <Nav>
            <a href="/">Políticas</a>
            <a href="/">Benefícios</a>
            <a href="/">Rastreio</a>
            <a href="/">Contato</a>
        </Nav>

        <MyButton/>
    </Header>
  )
}

export default Navbar
