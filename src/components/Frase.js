import styles from './Frase.module.css'

export function Frase() {
    return(
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Este é um componente com uma Frase</p>
        </div>
    )
}