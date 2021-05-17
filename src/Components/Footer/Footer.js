import React from 'react'
import styles from './Footer.module.css'

function Footer(props) {

    const englishText = {
        siteMap: "Site Map",
        aboutMe: "About Me",
        projects: "Projects",
        contact: "Contact",
        connect: "Connect",
        gitHub: "GitHub",
        linkedIn: "LinkedIn",
        instagram: "Instagram",
        facebook: "Facebook",
        languages: "Languages"
    }

    return(
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerFlex}>
                    <div className={styles.footerBlock} id="first-col">
                        <p className={styles.footerHeading}>{englishText.siteMap}</p>
                        <a href="#about-area" className={styles.footerLink}>{englishText.aboutMe}</a>
                        <a href="#projects-area" className={styles.footerLink}>{englishText.projects}</a>
                        <a href="#contact-area" className={styles.footerLink}>{englishText.contact}</a>
                    </div> <br />

                    <div className={styles.footerBlock}>
                        <p className={styles.footerHeading}>{englishText.connect}</p>
                        <a href="https://github.com/dpars34" className={styles.footerLink}>{englishText.gitHub}</a>
                        <a href="https://www.linkedin.com/in/daniel-parsons-b2491420a" className={styles.footerLink}>{englishText.linkedIn}</a>
                        <a href="https://www.instagram.com/dpars34/" className={styles.footerLink}>{englishText.instagram}</a>
                        <a href="https://www.facebook.com/daniel.parsons.372" className={styles.footerLink}>{englishText.facebook}</a>
                    </div> <br />

                    <div className={styles.footerBlock}>
                        <p className={styles.footerHeading}>{englishText.languages}</p>
                        <a href="#welcome-area" className={styles.footerLink} onClick={props.toEnglish}>English</a>
                        <a href="#welcome-area" className={styles.footerLink} onClick={props.toJapanese}>日本語</a>
                    </div>

                </div>

                <p className={styles.copyright}>© Daniel Parsons 2021</p>

            </div>
        </footer>
    )
}

export default Footer