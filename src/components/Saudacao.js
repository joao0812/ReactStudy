export function Saudacao({name}) {

    function gerarSaudacao(algumNome) {
        return(`Olá ${algumNome}, Bem vindo!`)
    }

    return(
        <>
        {name && <p>{gerarSaudacao(name)}</p>} {/* Faz com q o parágrafo só seja exibido se tiver algum valor válido na variável name */}
        </>
    )
}