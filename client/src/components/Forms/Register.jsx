
import {useSelector, useDispatch} from 'react-redux'
import FormContainer from './FormContainer'
import Input from './Input'
import { authActions } from '../../store/store'
import { useRef } from 'react'

export default function Register({login, signup}){
    //using dispatch function
    const dispatch = useDispatch()
    const emailRef = useRef()

    const authenticated = useSelector(state=>state.auth.authenticated)
    
    
    function onRegister(event){
        event.preventDefault()
        
        console.log(emailRef.current)
        
        login && dispatch(authActions.login(emailRef.current.value))
        signup && dispatch(authActions.signup(emailRef.current.value))
    }

    return (
        <>
            {!authenticated && 
            <FormContainer method="" action="" 
            onSubmit={onRegister} 
            title={login ? "login" : signup ? "signout" : ""}>
            <Input
                type="email" name="email" labelText="Correo" ref={emailRef}
                />
            <Input
                type="password" name="password" labelText="Contraseña"/>
            {
            signup && 
            <Input
                type="check-password" name="check-password" labelText="Confirmar Contraseña"/>
            }
            <button>Enviar</button>
            </FormContainer>
            }

            {authenticated && <button onClick={()=>dispatch(authActions.logout())}>Logout</button>}
            
        </>
        
    )
}