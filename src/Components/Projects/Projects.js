import React from "react"
import styles from "./Projects.module.css"
import ProjectBox from "./ProjectBox"
import onkun from "./onkun-screengrab.png"

function Projects(props) {

    /*const englishText = {
        sectionText: "Here is a collection of some of the projects I have made. Feel free to take a look..."
    } */

    const projectTextEnglish1 = {
        projectBoxTitle: "OnKun Kanji Dictionary",
        projectBoxImage: onkun,
        projectBoxImageAlt: "onkun kanji dictionary",
        projectBoxInfo: "OnKun is the simple kanji dictionary. It aims to display kanji readings in a simple and clear way, with on-yomi readings on the left in black, and kun-yomi readings on the right in red.",
        projectBoxLink: "https://onkun.org",
        projectBoxLinkText: "Visit the website",
        projectBoxDate: "May 2021"
    }

    const projectTextJapanese1 = {
        projectBoxTitle: "OnKun -　外国人向きの漢字辞典",
        projectBoxImage: onkun,
        projectBoxImageAlt: "onkun kanji dictionary",
        projectBoxInfo: "Onkunは外国人向きのシンプルな漢字辞典です。読み方を簡単に理解できるため、音読みは左側の黒い箱、訓読みは右側の赤い箱、わかりやすく分かれています。",
        projectBoxLink: "https://onkun.org",
        projectBoxLinkText: "ウェブサイトをご覧ください。",
        projectBoxDate: "2021年5月"
    }

    const projectTextEnglish2 = {
        projectBoxTitle: "Survey Form",
        projectBoxImage: "",
        projectBoxImageAlt: "survey form",
        projectBoxInfo: "A form to gather data about different user's language learning goals.",
        projectBoxLink: "https://codepen.io/daniel-parsons-the-vuer/pen/ZEBRgjE",
        projectBoxLinkText: "See the code on CodePen",
        projectBoxDate: "March 2021"
    }

    const projectTextJapanese2 = {
        projectBoxTitle: "調査フォーム",
        projectBoxImage: "",
        projectBoxImageAlt: "調査フォーム",
        projectBoxInfo: "ユーザーの言語学習ゴールデータを集めるフォームを作成。",
        projectBoxLink: "https://codepen.io/daniel-parsons-the-vuer/pen/ZEBRgjE",
        projectBoxLinkText: "CodePenにてコードをご参照ください。",
        projectBoxDate: "2021年3月"
    }

    return (
        <div className={styles.projectsArea} id="projects-area">
            <div className={styles.projectsTextArea}>
                <h2 className={styles.heading}>Projects</h2>
                <div className={styles.flexContainerProject}>
                    <ProjectBox info={props.isEnglish ? projectTextEnglish1 : projectTextJapanese1} />
                    {/*<ProjectBox info={props.isEnglish ? projectTextEnglish2 : projectTextJapanese2} />*/}
                </div>
            </div>
        </div>
    )
}

export default Projects