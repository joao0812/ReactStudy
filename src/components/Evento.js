import { Button } from './evento/Button'

export function Evento({ num }) {

    function meuEvento() {
        console.log(`Ativei o primeiro Evento`)
    }

    function segundoEvento() {
        console.log(`Ativei o segundo Evento`)
    }

    return (
        <div>
            <p>Clique para disparar um evento</p>
            <Button event={meuEvento} text='Primeiro Evento' />
            <Button event={segundoEvento} text='Segundo Evento' />
        </div>
    )
}