import logoCencosud from '../../IMG/Cencosud-logo.webp'
import logoMK from '../../IMG/captura.webp'
import logoWalmart from '../../IMG/walmart.webp'
import './Stats.css'

interface Stat {
  value: string;
  description: string;
  logo: string;
  logoAlt: string;
}

const stats: Stat[] = [
  {
    value: '28%',
    description: 'Reducción en costos operativos',
    logo: logoCencosud,
    logoAlt: 'Cencosud'
  },
  {
    value: '50X',
    description: 'Disminución tiempo de respuesta',
    logo: logoMK,
    logoAlt: 'MK'
  },
  {
    value: '500.000+',
    description: 'Conversaciones contestadas en menos de 5 minutos',
    logo: logoWalmart,
    logoAlt: 'Walmart'
  }
]

const Stats = () => {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-value">{stat.value}</div>
              <p className="stat-description">{stat.description}</p>
              <div className="stat-logo">
                <img 
                  src={stat.logo} 
                  alt={stat.logoAlt} 
                  className="stat-logo-image" 
                  loading="lazy"
                  decoding="async"
                  width="300"
                  height="157"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats

