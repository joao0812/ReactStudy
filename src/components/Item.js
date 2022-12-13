import PropTypes from 'prop-types' // pacote q já vem com o react

export function Item({marca, ano_lancamento}) {
    return(
        <>
        <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired, // Informa q o type tem q ser string e obrigatoriamente preenchido
    ano_lancamento: PropTypes.number
}

// Preenche os atributos q n foram preenchidos com os dados setados a baixo
Item.defaultProps = {
    marca: 'Marca genérica',
    ano_lancamento: 0
}