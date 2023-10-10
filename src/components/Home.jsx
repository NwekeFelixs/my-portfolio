import React from 'react'
import Header from './fragments/Header'
import Hero from './fragments/Hero'
import AboutSection from './fragments/AboutSection'
import ProjectSection from './fragments/Projectsection'
import ContactSection from './fragments/ContactSection'
import Footer from './fragments/Footer'

function Home() {
  return (
    <div>
      <Header/>
      <main>
        <article> 
            <Hero/>
            <AboutSection/>
            <ProjectSection/>
            <ContactSection/>
        </article>
      </main>
      <Footer/>
    </div>
  )
}

export default Home
