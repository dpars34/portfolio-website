import React from 'react'
import styles from './Header.module.css'

function Header(props) {

    const englishText = "English"
    const japaneseText= "日本語"

    return(
        <header className={styles.header}>
            <div className={styles.navBar}>
                <a href="#about-area" className={styles.navLink}>About Me</a>
                <a href="#projects-area" className={styles.navLink}>Projects</a>
                <a href="#contact-area" className={styles.navLink}>Contact</a>
            </div>
            <button onClick={props.languageChanger} className={styles.langButton}>{props.isEnglish ? japaneseText : englishText}</button>
        </header>
    )
}

export default Header