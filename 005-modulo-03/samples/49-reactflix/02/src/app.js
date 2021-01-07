'use strict'

import React from 'react'
import styled, { injectGlobal } from 'styled-components'

import 'normalize.css'
import 'milligram'

const App = () => (
  <Container>
    <Header>
      <h1>Reactflix</h1>
    </Header>

    <Main>
      Conteúdo
    </Main>

    <Footer>
      &copy; 2018
    </Footer>
  </Container>
);

injectGlobal`
  html, body, div[data-js="app"] {
    height: 100%;
  }
`

const headerHeight = '60px'
const footerHeight = '30px'

const Container = styled.div`
  height: 100%;
`

const Header = styled.header`
  height: ${headerHeight};
  background-color: #333;
`

const Main = styled.main`
  height: calc(100% - ${headerHeight + footerHeight});
  background-color: #222;
`

const Footer = styled.footer`
  height: ${footerHeight};
  background-color: #333;
`

export default App
