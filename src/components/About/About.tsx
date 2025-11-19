import fotoCamilo from '../../IMG/Camilo-CEO.webp'
import logoOdereso from '../../IMG/logo-adereso-rb-2.webp'
import './About.css'

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h2 className="about-title">Acerca de mi</h2>
        
        <div className="about-content">
          <div className="about-image">
            <img src={fotoCamilo} alt="Camilo López" className="profile-image" />
          </div>
          
          <div className="about-text">
            <h3 className="about-name">Camilo López</h3>
            <p className="about-position">
              CEO de Adereso AI, líder en automatización de atención digital.
            </p>
            <p className="about-description">
              Ha trabajado con Cencosud, Falabella, Walmart y Grupo K.
            </p>
            <p className="about-description">
              +11 años ayudando a escalar atención al cliente digital sin perder control ni calidad.
            </p>
          </div>
          
          <div className="about-logo">
            <a href="https://adereso.ai" target="_blank" rel="noopener noreferrer">
              <img src={logoOdereso} alt="Odereso" className="about-logo-image" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

