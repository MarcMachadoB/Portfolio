import PageHeading from '../components/PageHeading'

function ContactPage() {
  return (
    <main className="about-page contact-page container">
      <section id="contact" className="contact-section">
        <PageHeading
          eyebrow="Contacto"
          title="¿Tienes un proyecto en mente?"
          description="Puedes escribirme directamente o dejarme un mensaje. Estaré encantado de ayudarte a llevar tu idea a la realidad."
          className="contact-heading"
        />

        <div className="contact-content row g-4 mt-4">
          <div className="contact-details col-lg-8 d-grid gap-2">
            <a href="mailto:mark.machado.b@gmail.com" className="contact-item surface d-flex flex-column gap-1 p-3 rounded-3">
              <span className="contact-label">Email</span>
              <strong>mark.machado.b@gmail.com</strong>
            </a>
            <a href="https://www.linkedin.com/in/mark-machado-bou" className="contact-item surface d-flex flex-column gap-1 p-3 rounded-3">
              <span className="contact-label">LinkedIn</span>
              <strong>linkedin.com/in/mark-machado</strong>
            </a>
            <a href="https://github.com/MarcMachadoB" className="contact-item surface d-flex flex-column gap-1 p-3 rounded-3">
              <span className="contact-label">GitHub</span>
              <strong>github.com/MarcMachadoB</strong>
            </a>
            <div className="contact-item surface d-flex flex-column gap-1 p-3 rounded-3">
              <span className="contact-label">Ubicación</span>
              <strong>Tarragona, España</strong>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactPage
