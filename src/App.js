import React from 'react';
import { Route } from 'react-router-dom'

import BlacknWhiteContainer from './containers/BlacknWhiteContainer';
import './css/style.css'

export default () => {
  return(
    <Route
      exact
      path='/'
      component={BlacknWhiteContainer}
    />
  )
}
