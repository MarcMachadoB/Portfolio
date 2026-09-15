import { useEffect, useState } from 'react'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
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

  return (
    <div className="site-shell">
      <SiteHeader isContactPage={isContactPage} />
      {isContactPage ? <ContactPage /> : <AboutPage />}
    </div>
  )
}

export default App
