import logoOdereso from '../../IMG/logo-adereso-rb-2.webp'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <a href="https://adereso.ai" target="_blank" rel="noopener noreferrer">
              <img src={logoOdereso} alt="Odereso" className="logo-image" loading="eager" fetchpriority="high" />
            </a>
          </div>
          <div className="header-badge">
            Solo para marcas con +2000 consultas mensuales.
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

