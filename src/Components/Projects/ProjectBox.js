import React from "react"
import styles from "./Projects.module.css"

function ProjectBox(props) {

    function clickHandler() {
        window.location.assign(props.info.projectBoxLink)
    }

    return (
        <div className={styles.projectBox} onClick={clickHandler}>
            <hr className={styles.projectRule}/>
            <h3 className={styles.projectBoxTitle} lang={props.isEnglish ? "en" : "ja"}>{props.info.projectBoxTitle}</h3>
            
            <img src={props.info.projectBoxImage} alt={props.info.projectBoxImageAlt}className={styles.projectBoxImage}/>
            <p className={styles.projectBoxInfo} lang={props.isEnglish ? "en" : "ja"}>{props.info.projectBoxInfo}</p>
            <a href={props.info.projectBoxLink} className={styles.projectBoxLink} lang={props.isEnglish ? "en" : "ja"}>{props.info.projectBoxLinkText}</a>
            <p className={styles.projectDate} lang={props.isEnglish ? "en" : "ja"}>{props.info.projectBoxDate}</p>
        </div>
    )
}

export default ProjectBox