import { useEffect, useState } from 'react'
import './App.css'

const stats = [
  { value: 'DAW', label: 'Técnico Superior en DAW' },
  { value: 'ASIR', label: 'Perfil en ciberseguridad' },
  { value: 'IA + BD', label: 'Especialización' },
]

const skills = [
  'React',
  'TypeScript',
  'Python',
  'Java',
  'Spring Boot',
  'JavaScript',
  'CSS',
  'Responsive Design',
]

function ContactPage() {
  return (
    <main className="about-page contact-page">
      <section id="contact" className="contact-section">
        <div className="contact-heading">
          <p className="card-kicker">Contacto</p>
          <h1>¿Tienes un proyecto en mente?</h1>
          <p>
            Puedes escribirme directamente o dejarme un mensaje. Sustituye estos datos
            de ejemplo por tu información real cuando quieras.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-details">
            <a href="mailto:tu-email@ejemplo.com" className="contact-item">
              <span className="contact-label">Email</span>
              <strong>tu-email@ejemplo.com</strong>
            </a>
            <a href="https://www.linkedin.com/in/tu-usuario" className="contact-item">
              <span className="contact-label">LinkedIn</span>
              <strong>linkedin.com/in/tu-usuario</strong>
            </a>
            <a href="https://github.com/tu-usuario" className="contact-item">
              <span className="contact-label">GitHub</span>
              <strong>github.com/tu-usuario</strong>
            </a>
            <div className="contact-item">
              <span className="contact-label">Ubicación</span>
              <strong>Tu ciudad, España</strong>
            </div>
          </div>

          <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="name">Nombre</label>
            <input id="name" name="name" type="text" placeholder="Tu nombre" />

            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="tu@email.com" />

            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Cuéntame brevemente en qué puedo ayudarte..."
            />

            <button type="submit" className="primary-btn">
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}

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
      <header className="site-header">
        <a href="#/" className="brand" aria-label="Ir a la página Sobre mí">
          MM<span>.</span>
        </a>
        <nav className="site-nav" aria-label="Navegación principal">
          <a href="#/" className={!isContactPage ? 'active' : ''}>
            Sobre mí
          </a>
          <a href="#/contacto" className={isContactPage ? 'active' : ''}>
            Contacto
          </a>
        </nav>
      </header>

      {isContactPage ? (
        <ContactPage />
      ) : (
        <main className="about-page">
          <section className="about-intro">
        <div className="about-copy">
          <p className="eyebrow">Sobre mí</p>
          <h1>Hola, soy Marc Machado.</h1>
          <p className="lead">
            Soy Técnico Superior en Desarrollo de Aplicaciones Web y también cuento con
            formación en ASIR con perfil en ciberseguridad. Además, cuento con
            especializaciones en Ciberseguridad, Inteligencia Artificial y Big Data.
            Me apasiona crear soluciones digitales robustas, modernas y útiles,
            combinando desarrollo frontend con React y TypeScript y también tecnologías
            como Python, Java, Spring Boot y JavaScript para construir aplicaciones
            completas y bien estructuradas.
          </p>

          <div className="about-actions">
            <a href="#/contacto" className="primary-btn">
              Hablemos
            </a>
            <a
              href="/Curriculum%20Marc%20Machado.pdf"
              className="secondary-btn"
              target="_blank"
              rel="noreferrer"
            >
              Ver CV
            </a>
          </div>

          <ul className="highlights">
            {stats.map((item) => (
              <li key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="profile-card" aria-label="Perfil profesional">
          <div className="profile-image">
            <div className="avatar">JD</div>
          </div>

          <div className="card-details">
            <span className="label">Perfil</span>
            <h2>Desarrollador Web</h2>
            <p>
              Me centro en la creación de soluciones con buen rendimiento, código limpio
              y experiencia de usuario cuidada, combinando diseño y lógica de negocio.
            </p>
          </div>
        </div>
          </section>

          <section className="about-details">
        <article className="detail-card">
          <p className="card-kicker">Mi enfoque</p>
          <h3>Soluciones digitales con funcionalidad, claridad y detalle.</h3>
          <p>
            Disfruto desarrollando aplicaciones que combinan buenas prácticas, una
            interfaz intuitiva y una base técnica sólida. Mi objetivo es aportar valor
            real a cada proyecto y crear experiencias que conecten con las personas que
            las usan.
          </p>
        </article>

        <article className="detail-card">
          <p className="card-kicker">Habilidades</p>
          <div className="skills">
            {skills.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </article>
          </section>
        </main>
      )}
    </div>
  )
}

export default App
