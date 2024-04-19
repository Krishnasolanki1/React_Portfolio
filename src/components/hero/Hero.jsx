import React from 'react'
import styles from './Hero.module.css'
import { getImageUrl } from "../../utils"

export const Hero = () => {

    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Ada</h1>
            <p className={styles.description}>I'm a full-stack developer with 5 year  of experience using React and Node.js Reach out if you'd like to learn more !
            </p>
            <a className={styles.contectBtn} href='mailto:myemail@gmail.com'>Contect Me</a>
        </div>
        <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>



    </section>
}
