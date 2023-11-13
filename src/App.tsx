import { About } from './components/About'
import './App.css'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Projects } from './components/Projects'
import { Skils } from './components/Skils'
import { Testimonials } from './components/Testimonials'
import Footer from './components/Footer'



function App() {
 

  return (
    <main>
      <Hero/>
     <About/>
     <Services/>
     <Projects/>
     <Skils/>
     <Testimonials/>
     <Footer/>
    </main>
  )
}

export default App
