import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import GithubSection from './components/GithubSection'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useDarkMode from './hooks/useDarkMode'

function App() {
  const [isDark, setIsDark] = useDarkMode()

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <GithubSection />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
