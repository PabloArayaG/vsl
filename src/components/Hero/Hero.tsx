import { useState } from 'react'
import mockupImage from '../../IMG/Mockup-vsl.webp'
import './Hero.css'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'wistia-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'media-id'?: string;
        aspect?: string;
      };
    }
  }
}

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(true)
  }

  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero-title">
          Los 7 pasos para llevar tu servicio al cliente de
        </h1>
        <div className="hero-rating">
          <span className="rating-text">2 a 5★</span>
        </div>
        <p className="hero-subtitle">en menos de 60 días</p>
        
        <div className="video-container">
          <div className="video-wrapper">
            <div 
              className={`video-placeholder ${isPlaying ? 'hidden' : ''}`} 
              onClick={handlePlay}
            >
              <img 
                src={mockupImage} 
                alt="Dashboard preview - Los 7 pasos para mejorar servicio al cliente"
                className="mockup-image"
              />
              <button className="play-button" aria-label="Reproducir video">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <circle cx="30" cy="30" r="30" fill="rgba(0, 0, 0, 0.6)" />
                  <path d="M25 20 L40 30 L25 40 Z" fill="white" />
                </svg>
              </button>
            </div>
            {isPlaying && (
              <div className="wistia-video-wrapper">
                <wistia-player media-id="ytm1aekmsf" aspect="1.7777777777777777"></wistia-player>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

