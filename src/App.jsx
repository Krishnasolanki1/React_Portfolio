
import styles from './App.module.css'
import Navbar from './components/Navbar'
import { About } from './components/about/About'
import { Contect } from './components/contect/Contect'
import { Experience } from './components/experience/Experience'
import { Hero } from './components/hero/Hero'
import { Projects } from './components/projects/Projects'

function App() {
 
  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Contect/>
    </div>
  )
}

export default App
