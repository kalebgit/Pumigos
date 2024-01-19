//style

import './App.scss'
import Register from './components/Forms/Register'

//components


//using redux
import store from './store/store'
import { useSelector, useDispatch } from 'react-redux'

function App() {
    
  return (
    <>
      <Register login/>
    </>
  )
}

export default App
