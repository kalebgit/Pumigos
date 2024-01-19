
import {useSelector, useDispatch} from 'react-redux'
import FormContainer from './FormContainer'
import Input from './Input'
import { authActions } from '../../store/store'

export default function Register({login, signup}){
    //using dispatch function
    const dispatch = useDispatch()

    const authenticated = useSelector(state=>state.auth.authenticated)
    
    
    function onRegister(event){
        event.preventDefault()
        
        
        
        login && dispatch(authActions.login())
        signup && dispatch(authActions.signup())
    }

    return (
        <>
            {!authenticated && 
            <FormContainer method="" action="" 
            onSubmit={onRegister} 
            title={login ? "login" : signup ? "signout" : ""}>
            <Input
                type="email" name="email" labelText="Correo"/>
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