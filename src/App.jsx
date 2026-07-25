import Navbar from './components/Navbar'
import Hero from './components/Hero'
import EngineeringMetrics from './components/EngineeringMetrics'
import About from './components/About'
import Projects from './components/Projects'
import EngineeringPhilosophy from './components/EngineeringPhilosophy'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <EngineeringMetrics />
        <About />
        <Projects />
        <EngineeringPhilosophy />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
