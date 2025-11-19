import './Footer.css'

const Footer = () => {
  const scrollToForm = () => {
    const formSection = document.querySelector('.contact-form-section')
    formSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-cta">
          <h2 className="footer-title">¿Listo para implementar estos 7 pasos?</h2>
          <button onClick={scrollToForm} className="footer-button">
            Agendar Reunión
          </button>
        </div>
        
        <div className="footer-logo">
          <svg width="120" height="30" viewBox="0 0 120 30" fill="none">
            <text x="0" y="20" fill="white" fontSize="18" fontWeight="bold">
              ⚪ odereso
            </text>
          </svg>
        </div>
      </div>
    </footer>
  )
}

export default Footer

