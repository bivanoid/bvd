import './App.css'
import 'lenis/dist/lenis.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Content from './pages/Content'
import Dashboard from './pages/Dashboard'
import { ReactLenis } from 'lenis/react'

function App() {
  return (
    <ReactLenis 
    root
      options={{
    duration: 1.5,
    smoothWheel: true,
    wheelMultiplier: 1,
  }}>
      <Navbar/>
      <main>
        <Dashboard/>
        <Content/>
      </main>
      <Footer/>
    </ReactLenis>
  )
}

export default App
