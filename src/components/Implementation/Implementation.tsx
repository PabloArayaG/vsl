import iconShinesia from '../../IMG/shinesia.webp'
import iconTicket from '../../IMG/ticket.svg'
import iconAcompanamiento from '../../IMG/acompanamiento.svg'
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
    icon: iconTicket,
    title: 'Analiza y optimiza tu operación en tiempo real',
    description: ''
  },
  {
    icon: iconAcompanamiento,
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
                <img src={feature.icon} alt={feature.title} className="implementation-icon-image" loading="lazy" />
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

