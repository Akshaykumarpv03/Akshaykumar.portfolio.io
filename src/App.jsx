import { useState, useEffect } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

const FlowingBackground = () => (
  <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
    <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-rose-200/40 blur-[100px] animate-[flow_20s_ease-in-out_infinite]" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-indigo-200/30 blur-[120px] animate-[flow_25s_ease-in-out_infinite_alternate-reverse]" />
    <div className="absolute top-[30%] left-[40%] w-[40vw] h-[40vw] rounded-full bg-emerald-100/40 blur-[100px] animate-[flow_22s_ease-in-out_infinite_2s]" />
  </div>
)

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <FlowingBackground />
          <Navbar />
          <main className="pt-20">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  )
}

export default App
