import { useEffect } from 'react'
import './ContactForm.css'

declare global {
  interface Window {
    hbspt: any;
  }
}

const ContactForm = () => {
  useEffect(() => {
    // Esperar a que el script de HubSpot esté cargado
    const loadHubSpotForm = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "23480943",
          formId: "9e001a54-1d84-4118-91cf-71c4ed74b111",
          region: "na1",
          target: '#hubspot-form-container'
        });
      } else {
        // Si el script aún no está cargado, intentar de nuevo en 100ms
        setTimeout(loadHubSpotForm, 100);
      }
    };

    loadHubSpotForm();
  }, []);

  return (
    <section className="contact-form-section">
      <div className="container">
        <div className="form-wrapper">
          <h2 className="form-title">¿Listo para implementar esto en tu empresa?</h2>
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

