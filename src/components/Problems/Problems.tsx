import iconBajo from '../../IMG/bajo.webp'
import iconSad from '../../IMG/sad.webp'
import iconFrustro from '../../IMG/frustro.webp'
import './Problems.css'

interface Problem {
  icon: string;
  title: string;
  description: string;
}

const problems: Problem[] = [
  {
    icon: iconBajo,
    title: 'Tu servicio al cliente aún es lento, manual y caro',
    description: 'Dependes de equipos grandes para atender lo repetitivo y tus costos operativos siguen creciendo.'
  },
  {
    icon: iconSad,
    title: 'Tus métricas están por debajo del promedio',
    description: 'Tu CSAT no mejora, tus tiempos de respuesta son lentos, y sientes que te estás quedando atrás de tu competencia.'
  },
  {
    icon: iconFrustro,
    title: 'Las temporadas altas colapsan tu operación',
    description: 'En campañas o fechas clave, tu equipo se satura, los SLA revientan y los clientes se quejan del servicio.'
  }
]

const Problems = () => {
  return (
    <section className="problems">
      <div className="container">
        <h2 className="problems-title">El problema:</h2>
        
        <div className="problems-grid">
          {problems.map((problem, index) => (
            <div key={index} className="problem-card">
              <div className="problem-icon">
                <img src={problem.icon} alt={problem.title} className="problem-icon-image" />
              </div>
              <h3 className="problem-title">{problem.title}</h3>
              <p className="problem-description">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Problems

