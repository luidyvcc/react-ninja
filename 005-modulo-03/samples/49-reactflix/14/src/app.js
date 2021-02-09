'use strict'

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled, { injectGlobal } from 'styled-components'
import VideosList from 'components/videos-list'
import VideoSingle from 'components/video-single'
import RegisterVideo from 'components/register-video'
import MainHeader from 'components/header'
import MainFooter from 'components/footer'
import { headerHeight, footerHeight } from 'utils/constants'

import 'normalize.css'
import 'milligram'
import { fetchVideos } from './redux-flow/reducers/videos/action-creators'

class App extends PureComponent {
  componentDidMount () {
    this.props.fetchVideos()
  }
  render () {
    const { isRegisterVideoFormOpened } = this.props
    return (
      <Container>
        <MainHeader />

        <Main>
          {isRegisterVideoFormOpened && <RegisterVideo />}
          <VideoSingle />
          <VideosList />
        </Main>

        <MainFooter />
      </Container>
    )
  }
}

injectGlobal`
  html, body, div[data-js="app"] {
    height: 100%;
  }
`

const Container = styled.div`
  height: 100%;
`

const Main = styled.main`
  min-height: calc(100% - ${headerHeight} - ${footerHeight});
`

const mapStateToProps = (state) => ({
  isRegisterVideoFormOpened: state.ui.isRegisterVideoFormOpened
})

const mapDispatchToProps = { fetchVideos }

export default connect(mapStateToProps, mapDispatchToProps)(App)
