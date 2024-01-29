import { forwardRef } from "react"


const Input = forwardRef(function Input({labelText, name, ...props}, ref){
        return (
            <div>
                <label htmlFor={name}>{labelText}</label>
                <input name={name} id={name} {...props} ref={ref}/>
            </div>
        )
    })

    export default Input
