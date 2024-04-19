import React from 'react'
import styles from './Contect.module.css'
import { getImageUrl } from '../../utils'

export const Contect = () => {
    return (
        <footer id='contect' className={styles.container}>
            <div className={styles.text}>
                <h2>Contect</h2>
                <p>Feel free  to reach out !</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl('contact/emailIcon.png')} alt='Email Icon' />
                    <a href='maillto:mymaill@email'>Mymail@email.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl('contact/linkedinIcon.png')} alt='Linkeding Icon' />
                    <a href='#'>Linkding.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl('contact/githubIcon.png')} alt='Email Icon' />
                    <a href='#'>Github.com</a>
                </li>
            </ul>
        </footer>
    )
}
