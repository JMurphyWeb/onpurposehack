import React from 'react'
import Header from './Header/index.js'
import Footer from './Footer/index.js'

import '../../scss/style.scss'

const options = {
  logoUrl: 'img/poly-leaf.png'
}

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Header logoUrl={options.logoUrl} fluid />
          {this.props.children}
        <Footer logoUrl={options.logoUrl} />
      </div>
    )
  }
}
