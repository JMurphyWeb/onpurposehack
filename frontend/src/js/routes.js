import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App.js'
import Home from './views/Home/index.js'
import ProductPage from './views/Product-Page/product-page-index.js'
import ItemView from './views/Item'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='/product-page' component={ProductPage} />
    <Route path='/item/:id' component={ItemView} />
  </Route>
)
