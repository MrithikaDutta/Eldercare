import Header from '../components/landing/Header'
import Hero from '../components/landing/Hero'
import Services from '../components/landing/Services'
import Contact from '../components/landing/Contact'
import Footer from '../components/landing/Footer'

const Landing = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Landing 