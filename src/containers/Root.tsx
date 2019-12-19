import React from "react"
import { Provider } from 'react-redux'
import { Route } from "react-router"
import DevTools from "./DevTools"
import App from "./App"
import UserPage from "./UserPage"


const Root = ({ store }: any) => (
  <Provider store={store}>
    <>
      <Route path='/' component={App} />
      <Route path='/:username' component={UserPage} />
      <DevTools />
    </>
  </Provider>
)

export default Root;