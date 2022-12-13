import { useState } from "react"

export function Condicional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }

    function limparEmail(){
        setUserEmail('')
    }

    return(
        <div>
            <h2>Cadastre seu E-mail:</h2>
            <form>
                <input type='email' placeholder="Email" onChange={(e)=> setEmail(e.target.value)} />
                <button onClick={enviarEmail}>Enviar Email</button>
                {userEmail && (
                    <div>
                        <p>O E-mail do usuário é: {userEmail}</p>
                        <button onClick={limparEmail}>Limperar E-mail</button>
                    </div>
                )}
            </form>
        </div>
    )
}