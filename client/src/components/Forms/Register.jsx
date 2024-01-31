
import {useSelector, useDispatch} from 'react-redux'
import FormContainer from './FormContainer'
import Input from './Input'
import { authActions } from '../../store/store'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register({login, signup}){
    //using dispatch function
    const dispatch = useDispatch()
    const authenticated = useSelector(state=>state.auth.authenticated)

    const emailRef = useRef();
    const navigate = useNavigate()
    
    function onRegister(event){
        event.preventDefault()
        
        console.log(emailRef.current)
        
        login && dispatch(authActions.login({email: emailRef.current.value}))
        signup && dispatch(authActions.signup({email: emailRef.current.value}))
        navigate('/chat')
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