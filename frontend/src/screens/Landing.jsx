import Header from '../components/landing/Header'
import Hero from '../components/landing/Hero'
import AboutUs from '../components/landing/AboutUs';
import Services from '../components/landing/Services'
import Contact from '../components/landing/Contact'
import Reviews from '../components/landing/Reviews';
import Footer from '../components/landing/Footer'

const Landing = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <section id="home"><Hero /></section>
        <section id="services"><Services /></section>
        <section id="about"><AboutUs /></section>
        <section id="reviews"><Reviews /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  )
}

export default Landing