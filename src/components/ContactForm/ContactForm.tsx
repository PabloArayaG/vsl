import { useEffect, useRef, useState } from 'react'
import './ContactForm.css'

declare global {
  interface Window {
    hbspt: any;
  }
}

const ContactForm = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const formRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Intersection Observer para cargar HubSpot solo cuando el formulario esté visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !scriptLoaded) {
            loadHubSpotScript()
          }
        })
      },
      {
        rootMargin: '100px' // Cargar 100px antes de que sea visible
      }
    )

    if (formRef.current) {
      observer.observe(formRef.current)
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current)
      }
    }
  }, [scriptLoaded])

  const loadHubSpotScript = () => {
    if (scriptLoaded) return
    
    const script = document.createElement('script')
    script.src = '//js.hsforms.net/forms/embed/v2.js'
    script.charset = 'utf-8'
    script.type = 'text/javascript'
    script.async = true
    script.onload = () => {
      setScriptLoaded(true)
      loadHubSpotForm()
    }
    document.head.appendChild(script)
  }

  const loadHubSpotForm = () => {
    if (window.hbspt) {
      window.hbspt.forms.create({
        portalId: "23480943",
        formId: "9e001a54-1d84-4118-91cf-71c4ed74b111",
        region: "na1",
        target: '#hubspot-form-container'
      })
    } else {
      setTimeout(loadHubSpotForm, 100)
    }
  }

  return (
    <section className="contact-form-section" ref={formRef}>
      <div className="container">
        <p className="form-step">2. Implementa estos 7 pasos con Adereso</p>
        <div className="form-wrapper">
          <p className="form-title">Solo para marcas con más de 5 ejecutivos</p>
          <p className="form-subtitle">Agenda 30 minutos con nuestro equipo y obtén:</p>
          
          <ul className="form-benefits">
            <li>Diagnóstico personalizado de tu operación actual</li>
            <li>Roadmap de automatización específico para tu industria</li>
            <li>Proyección de ahorro en costos y tiempos (ROI estimado)</li>
            <li>Casos de éxito de empresas similares a la tuya</li>
          </ul>

          <div id="hubspot-form-container" className="hubspot-form-container"></div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm

