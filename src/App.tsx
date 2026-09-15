import './App.css'

const stats = [
  { value: 'TSDW', label: 'Técnico Superior en DAW' },
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

function App() {
  return (
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
            <a href="#contact" className="primary-btn">
              Hablemos
            </a>
            <a href="#cv" className="secondary-btn">
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
  )
}

export default App
