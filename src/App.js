import React, { useState } from 'react'
import Header from "./Components/Header/Header"
import Welcome from "./Components/Welcome/Welcome"
import About from "./Components/About/About"
import Projects from "./Components/Projects/Projects"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"

function App() {

  const [isEnglish, setIsEnglish] = useState(true)

  const languageChanger = (() => {
    setIsEnglish(prevState => !prevState)
  })

  const toEnglish = (() => {
    setIsEnglish(true)
  })

  const toJapanese = (() => {
    setIsEnglish(false)
  })

  return (
    <div>
      <Header isEnglish={isEnglish} languageChanger={languageChanger}/>
      <Welcome isEnglish={isEnglish}/>
      <About isEnglish={isEnglish}/>
      <Projects isEnglish={isEnglish}/>
      <Contact isEnglish={isEnglish}/>
      <Footer isEnglish={isEnglish} toEnglish={toEnglish} toJapanese={toJapanese}/>
    </div>
  )
}

export default App;
