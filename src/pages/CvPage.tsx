import PageHeading from '../components/PageHeading'

const studies = [
  {
    period: '09/2024 — 05/2026',
    type: 'Titulación superior',
    title: 'Desarrollo de Aplicaciones Web',
    detail: 'Técnico Superior en DAW',
  },
  {
    period: '09/2023 — 05/2024',
    type: 'Especialización',
    title: 'Inteligencia Artificial y Big Data',
    detail: 'Curso de Especialización',
  },
  {
    period: '09/2022 — 05/2023',
    type: 'Especialización',
    title: 'Ciberseguridad y Tecnologías de la Información',
    detail: 'Curso de Especialización',
  },
  {
    period: '09/2019 — 05/2022',
    type: 'Titulación superior',
    title: 'Administración de Sistemas en Red e Internet',
    detail: 'Grado Superior',
  },
]

const experience = [
  {
    period: '07/2025 — 05/2026',
    type: 'Fullstack Developer · Inetum',
    title: 'Desarrollo y mantenimiento de aplicaciones',
    detail: 'Desarrollo y optimización de interfaces con React, Vite y TypeScript; mantenimiento de plataformas e integración con APIs en C#.',
  },
  {
    period: '04/2023 — 06/2023',
    type: 'Proyecto · Firewall Virtual: Altercom 21',
    title: 'Seguridad perimetral de red',
    detail: 'Configuración y despliegue de servidores proxy y sistemas pfSense para proteger la red interna.',
  },
  {
    period: '09/2021 — 03/2022',
    type: 'Técnico Superior Informático · Escola Tarragona',
    title: 'Soporte y mantenimiento informático',
    detail: 'Resolución de incidencias, instalación, configuración y mantenimiento de equipos informáticos.',
  },
]

const certifications = [
  'Cisco CyberOps Associate · 05/2023',
  'Cisco Cybersecurity Essentials · 02/2023',
  'NDG Linux Essentials · 05/2023',
  'PCAP — Programming Essentials in Python · 05/2023',
]

function CvPage() {
  return (
    <main className="cv-page container">
      <section className="cv-hero">
        <PageHeading
          eyebrow="Currículum profesional"
          title="Una trayectoria entre sistemas, código y nuevas tecnologías."
          description="Formación en desarrollo web y administración de sistemas, con especialización en áreas que están transformando el sector tecnológico."
        />
        <div className="cv-identity" aria-label="Perfil de Marc Machado">
          <span className="cv-monogram" aria-hidden="true">MM</span>
          <div>
            <strong>Marc Machado</strong>
            <span>Desarrollo web · Sistemas · Tecnología</span>
          </div>
        </div>
      </section>

      <section className="cv-timelines" aria-label="Formación y experiencia">
        <div className="cv-timeline-column">
          <div className="cv-section-heading">
            <span className="cv-index">01</span>
            <div>
              <p className="cv-kicker">Aprendizaje</p>
              <h2>Formación</h2>
            </div>
          </div>
          <ol className="cv-timeline">
            {studies.map((study) => (
              <li className="cv-timeline-item" key={study.title}>
                <span className="cv-timeline-node" aria-hidden="true" />
                <article className="cv-entry">
                  <div className="cv-entry-meta">
                    <span className="cv-entry-type">{study.type}</span>
                    <span className="cv-entry-period">{study.period}</span>
                  </div>
                  <h3>{study.title}</h3>
                  <p>{study.detail}</p>
                </article>
              </li>
            ))}
          </ol>
        </div>

        <div className="cv-timeline-column">
          <div className="cv-section-heading">
            <span className="cv-index">02</span>
            <div>
              <p className="cv-kicker">Experiencia aplicada</p>
              <h2>Experiencia</h2>
            </div>
          </div>
          <ol className="cv-timeline cv-practice-timeline">
            {experience.map((item) => (
              <li className="cv-timeline-item" key={item.title}>
                <span className="cv-timeline-node cv-timeline-node-muted" aria-hidden="true" />
                <article className="cv-entry">
                  <div className="cv-entry-meta">
                    <span className="cv-entry-type">{item.type}</span>
                    <span className="cv-entry-period">{item.period}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="cv-additional" aria-label="Certificaciones e idiomas">
        <div className="cv-additional-group">
          <div className="cv-section-heading">
            <span className="cv-index">03</span>
            <div>
              <p className="cv-kicker">Formación complementaria</p>
              <h2>Certificaciones</h2>
            </div>
          </div>
          <ul className="cv-certification-list">
            {certifications.map((certification) => <li key={certification}>{certification}</li>)}
          </ul>
        </div>
        <div className="cv-additional-group cv-languages">
          <div className="cv-section-heading">
            <span className="cv-index">04</span>
            <div>
              <p className="cv-kicker">Comunicación</p>
              <h2>Idiomas</h2>
            </div>
          </div>
          <ul className="cv-language-list">
            <li><strong>Catalán</strong><span>Nativo</span></li>
            <li><strong>Español</strong><span>Nativo</span></li>
            <li><strong>Inglés</strong><span>B2 · OTE</span></li>
          </ul>
        </div>
      </section>

      <section className="cv-footer-note">
        <p>¿Quieres conocer más sobre mi trabajo?</p>
        <a href="#/proyectos" className="btn btn-dark">Ver proyectos</a>
        <a href="#/contacto" className="btn btn-outline-dark">Contactar</a>
      </section>
    </main>
  )
}

export default CvPage