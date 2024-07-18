import React from 'react'
import Main from './src/Screens/Main'
import { Provider } from 'react-redux'
import { myStore } from './src/redux/store/Store'


const App = () => {
  return (
    <Provider store={myStore}>
      <Main />
    </Provider>
  )
}

export default App
