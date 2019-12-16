import React from "react"
import { Provider } from 'react-redux'
import { Route } from "react-router"
import DevTools from "./DevTools"


const Root = ({ store }: any) => (
  <Provider store={store}>
    <>
      <Route path='/' component={() => null} />
      <DevTools />
    </>
  </Provider>
)

export default Root;