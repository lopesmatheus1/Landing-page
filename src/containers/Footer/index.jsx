import React from 'react'
import Facebook from '../../assets/icons/facebook.svg'
import Instagram from '../../assets/icons/instagram.svg'
import Wpp from '../../assets/icons/whatsapp.svg'
import styled from 'styled-components'
import breakpoints from '../../styles/breakpoints'

const StyledFooter = styled.footer`
    background-color: #000000;
    padding: 20px 16%;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2{
      font-size: 26px;
      font-weight: 400;
    }
    nav {
      text-decoration: none;
      display: flex;
      gap: 35px;
      a{
        color: white;
        text-decoration: none;
        font-size: 18px;
      }
    }

    .Icons{
      display: flex;
      gap: 20px;
    }

    @media ${breakpoints.bg} {
      flex-direction: column;
      gap: 20px;
    }

    @media ${breakpoints.sm} {
      nav{
        flex-direction: column;
      }
    }
`
function Footer() {
  return (
    <StyledFooter>
      <div>
          <h2>Logo</h2>
      </div>
      <nav>
        <a href="/">Políticas</a>
        <a href="/">Benefícios</a>
        <a href="/">Rastreio</a>
        <a href="/">Contato</a>
      </nav>
      <div className='Icons'>

        <a href=""><img src={Wpp} alt="" /></a>
        <a href=""><img src={Instagram} alt="" /></a>
        <a href=""><img src={Facebook} alt="" /></a>
      </div>
    </StyledFooter>
  );
}

export default Footer
