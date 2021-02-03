'use strict'

import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import VideosList from 'components/videos-list'
import VideoSingle from 'components/video-single'
import RegisterVideo from 'components/register-video'

import 'normalize.css'
import 'milligram'

const App = () => (
  <Container>
    <Header>
      <HeaderTitle>Reactflix</HeaderTitle>
      <RegisterButton>Cadastrar video</RegisterButton>
    </Header>

    <Main>
      <RegisterVideo />
      <VideoSingle />
      <VideosList />
    </Main>

    <Footer>
      &copy; 2018
    </Footer>
  </Container>
)

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
  align-items: center;
  height: ${headerHeight};
  display: flex;
  background: #333;
  justify-content: space-between;
  padding: 0 10px;
`

const HeaderTitle = styled.h1`
  color: white;
  margin-bottom: 0;
`

const RegisterButton = styled.button`
  margin-bottom: 0;
`

const Main = styled.main`
  min-height: calc(100% - ${headerHeight} - ${footerHeight});
`

const Footer = styled.footer`
   height: ${footerHeight};
  background: #333;
`

export default App
