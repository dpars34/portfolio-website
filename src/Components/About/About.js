import React from 'react'
import styles from './About.module.css'

function About(props) {

    const englishText = {
         sectionText1: "As far back as I can remember, I have had the unwavering desire to create. From the age of seven I was writing my own songs on the guitar, and by fifteen I was writing my first piano pieces. It was this desire to create that eventually led me to music college where I graduated with a degree in music composition.",
         sectionText2: "After graduating, I decided that I needed a change, so I packed my bags and moved to Japan to teach English. It was in Japan that I was first introduced to the world of programming, when one of my friends showed me a language learning tool that she was working on. I was instantly captivated, amazed by the endless possibilities that programming and web design were able to offer.",
         sectionText3: "Since then I have been working on various different projects with a focus on Javascript, React and HTML/CSS.",
         sectionText4: "My arts background has given me a unique perspective on programming and web design. No matter whether it is a musical composition or a web page, all creative endeavours should be beautiful, balanced and unique.",
         sectionText5: "I currently live in Osaka, Japan. I am a fluent Japanese speaker having achieved the JLPT N1 grade. Scroll down to see some of the projects I have been working on."
     } 
 
     const japaneseText = {
         sectionText1: "子供の頃からいつも何かを作る衝動に駆られていました。７歳の頃に初めてギターで作曲をし、15歳の頃にはクラシック音楽の虜になりピアノの曲を作り始めました。常に何かを作りたいという気持ちから大学はイギリスの音楽大学に進学し、2018年に卒業しました。",
         sectionText2: "大学卒業後すぐに「何か変化が欲しい」と思うようになり、荷物をまとめて日本に引っ越してきました。日本で初めてプログラミングに出会い、その無限大の可能性に今でも魅了されています。そこからJavascript, React, HTML/CSSを使いながら様々なプロジェクトに取り組んでいます。",
         sectionText3: "プログラミングにおいても長年の音楽との生活を通して学んだ芸術的感覚が生かされています。作曲、ウェブサイトに関わらず何かを創るときに必要なのはバランス・ユニークさ・美しさだと信じています。",
         sectionText4: "現在は大阪に住みながら英語を教える仕事をしています。子供の頃から母と日本語で話していたこともあり、バイリンガルとして毎日日本語を使う環境に身を置きながら仕事をしています。JLPT N1は2020年12月に取得しました。",
         sectionText5: ""
     } 
     
     return (
         <div className={styles.aboutArea} id="about-area">
             <div className={styles.aboutTextArea}>
                 <h2 className={styles.heading}>About Me</h2>
                 <div className={styles.textBox}>
 
                     <div className={styles.textCol}>
                         <p className={styles.sectionText} lang={props.isEnglish ? "en" : "ja"}>{props.isEnglish ? englishText.sectionText1 : japaneseText.sectionText1}</p>
                         <p className={styles.sectionText} lang={props.isEnglish ? "en" : "ja"}>{props.isEnglish ? englishText.sectionText2 : japaneseText.sectionText2}</p>
                     </div>
 
                     <div className={styles.verticalLine}></div>
 
                     <div className={styles.textCol} >
                         <p className={styles.sectionText3} >{props.isEnglish ? englishText.sectionText3 : japaneseText.sectionText3}</p>
                         <p className={styles.sectionText4} >{props.isEnglish ? englishText.sectionText4 : japaneseText.sectionText4}</p>
                         <p className={styles.sectionText} >{props.isEnglish ? englishText.sectionText5 : null}</p>
                     </div>
                     
                 </div>
             </div>
         </div>
     )
 }

export default About