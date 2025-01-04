import { Provider } from 'react-redux'
import store from './redux/store'
import Login from './Login'

const App = () => {

  
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  )
}

export default App
