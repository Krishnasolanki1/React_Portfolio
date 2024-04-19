import React, { useState } from 'react';
import styles from "./Navbar.module.css"
import { getImageUrl } from "../utils"

export default function Navbar() {
    const [menuOpen, setmenuOpen] = useState(false);
    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href='/' >Protfolio</a>
            <div className={styles.menu}>
                <img className={styles.menuBtn} src={menuOpen ? getImageUrl('nav/closeIcon.png')
                    : getImageUrl("nav/menuIcon.png")}
                    onClick={()=>setmenuOpen(! menuOpen)} />
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                onClick={()=>setmenuOpen(false)}
                >
                    <li>
                        <a href='#about'>About</a>
                    </li>
                    <li>
                        <a href='#experience'>Experience</a>
                    </li>
                    <li>
                        <a href='#projects'>Projects</a>
                    </li>
                    <li>
                        <a href='#contect'>Contect</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
