import './About.css'

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h2 className="about-title">Acerca de mí</h2>
        
        <div className="about-content">
          <div className="about-image">
            <div className="profile-placeholder">
              <div className="profile-circle"></div>
            </div>
          </div>
          
          <div className="about-text">
            <h3 className="about-name">Camilo López</h3>
            <p className="about-position">
              CEO de Adereso AI, líder en soluciones de atención digital.
            </p>
            <p className="about-description">
              Ha trabajado con Cencosud, Falabella, Inchcape y Grupo K.
            </p>
            <p className="about-description">
              Hemos ayudado a escalar sistemas de atención de clientes y gestionar ventas en tiempo de calidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

