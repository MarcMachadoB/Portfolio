import PageHeading from '../components/PageHeading'
import { projects } from '../data/projects'

function ProjectsPage() {
  return (
    <main className="about-page projects-page container">
      <PageHeading
        eyebrow="Proyectos"
        title="Trabajo y proyectos en construcción."
        description="Una selección de proyectos actuales y futuros, con las tecnologías y objetivos de cada solución."
      />

      <section className="projects-grid row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-4" aria-label="Lista de proyectos">
        {projects.map((project) => (
          <article key={project.id} className="project-card surface col">
            <div className="project-preview d-flex align-items-center justify-content-center">
              {project.image ? (
                <img
                  src={`${import.meta.env.BASE_URL}${project.image}`}
                  alt={`Captura de ${project.title}`}
                />
              ) : (
                <span className="label">{project.status}</span>
              )}
            </div>
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="project-technologies d-flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span key={technology} className="skill-tag">
                    {technology}
                  </span>
                ))}
              </div>
              {project.links && (
                <div className="d-flex flex-wrap gap-2 mt-4">
                  {project.links.map((link) => (
                    <a key={link.url} href={link.url} className="btn btn-outline-dark">
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}

export default ProjectsPage
