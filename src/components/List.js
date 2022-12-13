import { Item } from './Item'

export function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca='Ferrari' ano_lancamento={1986}/>
                <Item marca='Fiat' ano_lancamento={1889}/>
                <Item  />
            </ul>
        </>
    )
}