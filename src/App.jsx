import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
      <Navbar></Navbar>
      <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-blue-50 to-white" id="home"> <Hero /> </section>
      <section className="py-20 px-6 md:px-20 bg-gray-50" id="about"> <About /> </section>
      <section className="py-20 px-6 md:px-20 bg-white" id="projects"> <Projects /> </section>
      <section className="py-20 px-6 md:px-20 bg-gray-50" id="resume"> <Resume /> </section>
      <section className="py-20 px-6 md:px-20 bg-white" id="contact"> <Contact /> </section>
      <section className="py-20 px-6 md:px-20 bg-gray-100" id="footer"> <Footer /> </section>
      <ScrollToTop></ScrollToTop>
    </div>
  )
}

export default App;