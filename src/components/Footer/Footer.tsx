import logoOdereso from '../../IMG/logo-adereso-rb-2.webp'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">
          <img src={logoOdereso} alt="Odereso" className="footer-logo-image" />
        </div>
      </div>
    </footer>
  )
}

export default Footer

