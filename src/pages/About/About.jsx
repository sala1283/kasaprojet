import './About.scss'
import { AboutContent } from '../../constants'

import Banner from '../../components/Banner/Banner'
import Collapse from '../../components/Collapse/Collapse'
import { useEffect } from 'react'

function About() {
  useEffect(() => {
    document.title = 'Kasa | À propos'
  })

  return (
    <main id="about">
      <Banner page="about" />
      <section id="collapse-container">
        {AboutContent.map((content, index) => {
          return (
            <Collapse
              key={index}
              title={content.title}
              content={content.content}
            />
          )
        })}
      </section>
    </main>
  )
}

export default About
