//style
import './App.scss'
import Input from './components/Forms/Input'
import Register from './components/Forms/Register'

//components
//using redux
import store from './store/store'
import { useSelector, useDispatch } from 'react-redux'

import { useRef, useState } from 'react'

//importing from react-router
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Chat from './pages/Chat'
import Welcome from './pages/Welcome'
import Root from './pages/Root'

const router = createBrowserRouter([
  {path: "/", 
  element: <Root/>, 
  children: [
    {path: '/', element: <Welcome/>},
    // {path: '/chat', element: <Chat/>}
    {path: '/chat/:room', element: <Chat/>}
    
  ]}
  
])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
