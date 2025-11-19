import { useState, useEffect } from 'react'
import './ScrollBanner.css'

const ScrollBanner = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const checkScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100
      
      setIsVisible(scrollPercent >= 50)
    }

    let scrollTimeout: number
    const handleScroll = () => {
      if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout)
      }
      scrollTimeout = window.requestAnimationFrame(() => {
        checkScroll()
      })
    }

    window.addEventListener('scroll', handleScroll)
    checkScroll() // Check on mount

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout)
      }
    }
  }, [])

  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const formSection = document.querySelector('.contact-form-section')
    formSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={`scroll-banner ${isVisible ? 'show' : ''}`}>
      <div className="scroll-banner-content">
        <h2 className="scroll-banner-title">¿Listo para implementar estos 7 pasos?</h2>
      </div>
      <div className="scroll-banner-button-wrapper">
        <a href="#form" className="scroll-banner-button" onClick={scrollToForm}>
          Agendar Reunión
        </a>
      </div>
    </div>
  )
}

export default ScrollBanner

