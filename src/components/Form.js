import { useState } from 'react'

export function Form() {

    function cadastraUser(e) {
        e.preventDefault() // Para o comportamento padrão do HTML fazendo com q aconteça oq vem a baixo dessa linha
        console.log(`Usuário ${name} foi cadastrado com a senha: ${password}`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastraUser}>
                <div>
                    <label htmlFor='name'>Nome: </label>
                    <input type='text' id='name' name='name' placeholder="Nome" onChange={(e)=>setName(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor='password'>Senha: </label>
                    <input type='password' id='password' name='password' placeholder="Senha" onChange={(e)=>setPassword(e.target.value)}></input>
                </div>
                <div>
                    <input type='submit' value='Cadastrar'></input>
                </div>
            </form>
        </div>
    )
}