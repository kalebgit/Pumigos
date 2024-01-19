

export default function FormContainer({title, children, ...props}){
    return (
        <form {...props}>
            <fieldset>
                <legend>{title}</legend>
                {children}
            </fieldset>
            
        </form>
    )
}