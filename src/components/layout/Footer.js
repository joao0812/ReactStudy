import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'

import styles from './Footer.module.css'

export function Footer() {
    return (
        <footer>
            <ul className={styles.social_list}>
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaWhatsapp /></li>
            </ul>
        </footer>)
}