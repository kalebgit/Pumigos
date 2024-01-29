//style

import './App.scss'
import Input from './components/Forms/Input'
import Register from './components/Forms/Register'

//components


//using redux
import store from './store/store'
import { useSelector, useDispatch } from 'react-redux'
import {socket} from './socket'
import { useRef, useState } from 'react'

function App() {
  const [connected, setConnected] = useState(false)
  let authenticated = useSelector(state=>state.auth.authenticated)
  let email = useSelector(state=>state.auth.email)
  let messageRef = useRef()

  socket.on('bienvenido', (data)=>{
    console.log(data)
    socket.emit('clientMessage', "hey server i just sent you a message", [1, 2, 4, 5], {authenticated: authenticated})
    socket.emit("saludo", )
  })

  return (
    <>
      <Register login/>

      {authenticated && 
      <>
        <button onClick={()=>{connected ? socket.disconnect() : socket.connect()}}>Toggle connection</button>
        <h1>CHAT</h1>
            <Input labelText={"Ingresa mensaje"} type="text" ref={messageRef}/>
            <button onClick={()=>{
              const data = {email: email, message: messageRef.current.value};
              console.log(data)
              socket.emit('messageSent', data)
            }
              }>Enviar Mensajge</button>
      </>}
    </>
  )
}

export default App
