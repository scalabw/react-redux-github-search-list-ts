import React from "react"
import { Provider } from 'react-redux'
import { Route } from "react-router"
import DevTools from "./DevTools"
import App from "./App"


const Root = ({ store }: any) => (
  <Provider store={store}>
    <>
      <Route path='/' component={App} />
      <DevTools />
    </>
  </Provider>
)

export default Root;