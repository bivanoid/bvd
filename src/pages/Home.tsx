import Footer from "../components/HomeLayouts/Footer"
import Navbar from "../components/CommontLayouts/Navbar"
import Content from "../components/HomeLayouts/Content"
import Dashboard from "../components/HomeLayouts/Dashboard"

export default function Home() {
  return (
    <div>
      <Navbar ttl="bivanoid" backTo="/"/>
      <main>
        <Dashboard/>
        <Content/>
      </main>
      <Footer/>
    </div>
  )
}