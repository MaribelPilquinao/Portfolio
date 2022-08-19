import 'bootstrap/dist/css/bootstrap.min.css';
// import { HashRouter, Routes, Route } from 'react-router-dom';
import { Header, AcercaDeMi, Contacto, Experiencia, MisHabilidades, Portafolio, Footer, Home } from './components'





function App() {


  return (
    <section>
      <Header />
      <Home />
      <AcercaDeMi />
      <MisHabilidades />
      <Experiencia />
      <Portafolio />
      <Contacto />
      <Footer />
    </section>
  )
}

export default App
