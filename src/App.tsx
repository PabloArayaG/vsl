import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import ContactForm from './components/ContactForm/ContactForm'
import Problems from './components/Problems/Problems'
import Implementation from './components/Implementation/Implementation'
import Stats from './components/Stats/Stats'
import About from './components/About/About'
import ScrollBanner from './components/ScrollBanner/ScrollBanner'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <ContactForm />
        <Problems />
        <Implementation />
        <Stats />
        <About />
      </main>
      <ScrollBanner />
    </div>
  )
}

export default App

