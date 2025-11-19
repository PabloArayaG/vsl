import type { Stat } from '../../types'
import './Stats.css'

const stats: Stat[] = [
  {
    value: '28%',
    description: 'Reducción en costos operativos',
    logo: 'Cencosud',
    logoAlt: 'Cencosud'
  },
  {
    value: '50X',
    description: 'Disminución tiempo de respuesta',
    logo: 'K',
    logoAlt: 'K'
  },
  {
    value: '500.000+',
    description: 'Conversaciones procesadas en tiempo real',
    logo: 'Walmart',
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
                <div className="logo-placeholder">{stat.logo}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats

