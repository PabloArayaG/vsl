import iconShinesia from '../../IMG/shinesia.webp'
import './Implementation.css'

interface ImplementationFeature {
  icon: string;
  title: string;
  description: string;
}

const features: ImplementationFeature[] = [
  {
    icon: iconShinesia,
    title: 'Implementa Agentes de IA en WhatsApp y todos tus canales digitales',
    description: ''
  },
  {
    icon: '📝',
    title: 'Analiza y optimiza tu operación en tiempo real',
    description: ''
  },
  {
    icon: '👥',
    title: 'Cuenta con expertos que te guían en cada paso',
    description: ''
  }
]

const Implementation = () => {
  return (
    <section className="implementation">
      <div className="container">
        <h2 className="implementation-title">
          Implementa los 7 pasos junto a Adereso
        </h2>
        
        <div className="implementation-grid">
          {features.map((feature, index) => (
            <div key={index} className="implementation-card">
              <div className="implementation-icon">
                {typeof feature.icon === 'string' && feature.icon.startsWith('/') ? (
                  <img src={feature.icon} alt={feature.title} className="implementation-icon-image" />
                ) : feature.icon.endsWith('.webp') ? (
                  <img src={feature.icon} alt={feature.title} className="implementation-icon-image" />
                ) : (
                  feature.icon
                )}
              </div>
              <h3 className="implementation-feature-title">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Implementation

