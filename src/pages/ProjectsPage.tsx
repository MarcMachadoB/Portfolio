import PageHeading from '../components/PageHeading'
import { projects } from '../data/projects'

function ProjectsPage() {
  return (
    <main className="about-page container">
      <PageHeading
        eyebrow="Proyectos"
        title="Trabajo y proyectos en construcción."
        description="Una selección de proyectos actuales y futuros, con las tecnologías y objetivos de cada solución."
      />

      <section className="projects-grid row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-4" aria-label="Lista de proyectos">
        {projects.map((project) => (
          <article key={project.id} className="project-card surface col">
            <div className="project-preview d-flex align-items-center justify-content-center">
              <span className="label">{project.status}</span>
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
              {project.link && (
                <a href={project.link} className="btn btn-outline-dark mt-4">
                  Ver proyecto
                </a>
              )}
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}

export default ProjectsPage
