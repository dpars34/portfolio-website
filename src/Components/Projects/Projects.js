import React from "react"
import styles from "./Projects.module.css"
import ProjectBox from "./ProjectBox"
import onkun from "./onkun-screengrab.png"
import borden from "./9borden-screengrab.jpg"
import sari from './sari-screengrab.jpg'
import navijisho from './navijisho-screengrab.png'

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
        projectBoxTitle: "9 Borden - Coffee Shop Website",
        projectBoxImage: borden,
        projectBoxImageAlt: "9 borden coffee shop website",
        projectBoxInfo: "A website created for 9 Borden Coffee, a coffee shop located in Osaka, Japan.",
        projectBoxLink: "https://9bordencoffee.com/",
        projectBoxLinkText: "Visit the website",
        projectBoxDate: "June 2021"
    }

    const projectTextJapanese2 = {
        projectBoxTitle: "9 Borden Coffee - ホームページ",
        projectBoxImage: borden,
        projectBoxImageAlt: "9 borden コーヒーショップのホームページ",
        projectBoxInfo: "大阪にあるカフェ、9 Borden Borden Coffeeのホームページです。",
        projectBoxLink: "https://9bordencoffee.com/",
        projectBoxLinkText: "ウェブサイトをご覧ください。",
        projectBoxDate: "2021年6月"
    } 

    const projectTextEnglish3 = {
        projectBoxTitle: "Sari Okazaki - Koto/Shamisen Performer",
        projectBoxImage: sari,
        projectBoxImageAlt: "sari okazaki website",
        projectBoxInfo: "Website for Japanese traditional music specialist, Koto and Shamisen player, Sari Okazaki.",
        projectBoxLink: "https://serene-stonebraker-811ed7.netlify.app/",
        projectBoxLinkText: "Visit the website (Website in Japanese)",
        projectBoxDate: "August 2021"
    }

    const projectTextJapanese3 = {
        projectBoxTitle: "岡崎さり - お箏・三味線演奏者のホームページ",
        projectBoxImage: sari,
        projectBoxImageAlt: "岡崎さりのホームページ",
        projectBoxInfo: "邦楽専門、お箏と三味線の演奏者、岡崎さりのホームページ。",
        projectBoxLink: "https://www.sarishamisen.com/",
        projectBoxLinkText: "ウェブサイトをご覧ください。",
        projectBoxDate: "2021年8月"
    } 

    const projectTextEnglish4 = {
        projectBoxTitle: "Navi Jisho - The Easy To Navigate Japanese Dictionary",
        projectBoxImage: navijisho,
        projectBoxImageAlt: "navi jisho website",
        projectBoxInfo: "Navi Jisho is the easy to navigate Japanese dictionary, inspired by the layout and design of the Tokyo and Osaka metro systems.",
        projectBoxLink: "https://www.navijisho.org/",
        projectBoxLinkText: "Visit the website",
        projectBoxDate: "November 2021"
    }

    const projectTextJapanese4 = {
        projectBoxTitle: "Navi Jisho - 簡単にナビゲーションできる日本語辞典",
        projectBoxImage: navijisho,
        projectBoxImageAlt: "navi jisho website",
        projectBoxInfo: "東京と大阪の地下鉄からインスピレーションをとったNavi Jisho - 誰でも簡単にビゲーションできる日本語辞典",
        projectBoxLink: "https://www.navijisho.org/",
        projectBoxLinkText: "ウェブサイトをご覧ください。",
        projectBoxDate: "2021年11月"
    } 

    return (
        <div className={styles.projectsArea} id="projects-area">
            <div className={styles.projectsTextArea}>
                <h2 className={styles.heading}>Projects</h2>
                <div className={styles.flexContainerProject}>
                    <ProjectBox info={props.isEnglish ? projectTextEnglish1 : projectTextJapanese1} />
                    <hr className={styles.projectRule}/>
                    <ProjectBox info={props.isEnglish ? projectTextEnglish2 : projectTextJapanese2} />
                    <hr className={styles.projectRule}/>
                    <ProjectBox info={props.isEnglish ? projectTextEnglish3 : projectTextJapanese3} />
                    <hr className={styles.projectRule}/>
                    <ProjectBox info={props.isEnglish ? projectTextEnglish4 : projectTextJapanese4} />
                </div>
            </div>
        </div>
    )
}

export default Projects