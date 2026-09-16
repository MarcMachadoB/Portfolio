import PageHeading from '../components/PageHeading'
import { skills, stats } from '../data/profile'

function AboutPage() {
  return (
    <main className="about-page container">
      <section className="about-intro row g-4 align-items-center">
        <div className="about-copy col-lg-7">
          <PageHeading
            eyebrow="Sobre mí"
            title="Hola, soy Marc Machado."
            description={
              <>
                Soy Técnico Superior en Desarrollo de Aplicaciones Web y también cuento
                con formación en ASIR con perfil en ciberseguridad. Además, cuento con
                especializaciones en Ciberseguridad, Inteligencia Artificial y Big Data.
                Me apasiona crear soluciones digitales robustas, modernas y útiles,
                combinando desarrollo frontend con React y TypeScript y también
                tecnologías como Python, Java, Spring Boot y JavaScript para construir
                aplicaciones completas y bien estructuradas.
              </>
            }
          />

          <div className="about-actions d-flex flex-wrap gap-3 mt-4">
            <a href="#/contacto" className="btn btn-dark">
              Hablemos
            </a>
            <a
              href="/Curriculum%20Marc%20Machado.pdf"
              className="btn btn-outline-dark"
              target="_blank"
              rel="noreferrer"
            >
              Ver CV
            </a>
          </div>

          <ul className="highlights row row-cols-1 row-cols-sm-3 g-3">
            {stats.map((item) => (
              <li key={item.label} className="surface col">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="profile-card col-lg-5" aria-label="Perfil profesional">
          <div className="profile-image d-grid justify-content-center align-items-center">
            <div className="avatar d-grid justify-content-center align-items-center">JD</div>
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

      <section className="about-details row g-4 mt-4">
        <article className="detail-card surface col-lg-6">
          <p className="card-kicker">Mi enfoque</p>
          <h3>Soluciones digitales con funcionalidad, claridad y detalle.</h3>
          <p>
            Disfruto desarrollando aplicaciones que combinan buenas prácticas, una
            interfaz intuitiva y una base técnica sólida. Mi objetivo es aportar valor
            real a cada proyecto y crear experiencias que conecten con las personas que
            las usan.
          </p>
        </article>

        <article className="detail-card surface col-lg-6">
          <p className="card-kicker">Habilidades</p>
          <div className="skills d-flex flex-wrap gap-2">
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

export default AboutPage
