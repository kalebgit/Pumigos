

export default function Input({labelText, name, ...props}){
    return (
        <div>
            <label htmlFor={name}>{labelText}</label>
            <input name={name} id={name} {...props}/>
        </div>
    )
}