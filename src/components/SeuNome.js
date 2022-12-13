export function SeuNome({ setName }) {
    return (
        <div>
            <p>Digite o seu nome: </p>
            <input type='text' placeholder='Digite seu nome' onChange={(e)=>setName(e.target.value)} />
        </div>
    )
}