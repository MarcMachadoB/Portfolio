import { useEffect, useState } from 'react'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ProjectsPage from './pages/ProjectsPage'
import CvPage from './pages/CvPage'
import SiteHeader from './components/SiteHeader'
import './styles/main.scss'

function App() {
  const [route, setRoute] = useState(window.location.hash || '#/')

  useEffect(() => {
    const handleHashChange = () => setRoute(window.location.hash || '#/')
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const isContactPage = route === '#/contacto'
  const isProjectsPage = route === '#/proyectos'
  const isCvPage = route === '#/cv'

  return (
    <div className="site-shell">
      <SiteHeader
        isContactPage={isContactPage}
        isProjectsPage={isProjectsPage}
        isCvPage={isCvPage}
      />
      {isContactPage ? (
        <ContactPage />
      ) : isProjectsPage ? (
        <ProjectsPage />
      ) : isCvPage ? (
        <CvPage />
      ) : (
        <AboutPage />
      )}
    </div>
  )
}

export default App
