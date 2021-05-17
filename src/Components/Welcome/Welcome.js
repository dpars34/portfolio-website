import React from 'react'
import styles from './Welcome.module.css'

function Welcome(props) {

    const englishText = {
        sectionText1: "My name is Daniel, but you can call me Dan. I am a web developer, fluent Japanese speaker and musician.",
        sectionText2: "This page is about me and about the projects I have created. Feel free to take a look around!",
        buttonText: "Get In Touch"
    }

    const japaneseText = {
        sectionText1: "イギリス出身、3年前から日本に住んでいるウェブ開発者、ダニエル パーソンズです。",
        sectionText2: "このサイトは、今まで作成したプロジェクトを紹介するために作られましたので、ぜひご覧ください。",
        buttonText: "お問い合わせ"
    }

    return (
        <div className={styles.welcomeArea} id="welcome-area">
            <div className={styles.welcomeTextArea}>
                <div className={styles.content}>
                <h1 className={styles.heading}>Welcome</h1>
                    <p className={styles.sectionText} lang={props.isEnglish ? "en" : "ja"}>{props.isEnglish ? englishText.sectionText1 : japaneseText.sectionText1}</p>
                    <p className={styles.sectionText2} lang={props.isEnglish ? "en" : "ja"}>{props.isEnglish ? englishText.sectionText2 : japaneseText.sectionText2}</p>
                    <form action="#contact-area">
                        <button className={styles.contactButton}>{props.isEnglish ? englishText.buttonText : japaneseText.buttonText}</button>
                    </form>
                </div>  
            </div>
        </div>
    )
}

export default Welcome