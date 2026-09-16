import PageHeading from '../components/PageHeading'

function ContactPage() {
  return (
    <main className="about-page contact-page container">
      <section id="contact" className="contact-section">
        <PageHeading
          eyebrow="Contacto"
          title="¿Tienes un proyecto en mente?"
          description="Puedes escribirme directamente o dejarme un mensaje. Sustituye estos datos de ejemplo por tu información real cuando quieras."
          className="contact-heading"
        />

        <div className="contact-content">
          <div className="contact-details">
            <a href="mailto:mark.machado.b@gmail.com" className="contact-item surface">
              <span className="contact-label">Email</span>
              <strong>mark.machado.b@gmail.com</strong>
            </a>
            <a href="https://www.linkedin.com/in/mark-machado-bou" className="contact-item surface">
              <span className="contact-label">LinkedIn</span>
              <strong>linkedin.com/in/mark-machado</strong>
            </a>
            <a href="https://github.com/MarcMachadoB" className="contact-item surface">
              <span className="contact-label">GitHub</span>
              <strong>github.com/MarcMachadoB</strong>
            </a>
            <div className="contact-item surface">
              <span className="contact-label">Ubicación</span>
              <strong>Tarragona, España</strong>
            </div>
          </div>

          <form
            className="contact-form surface"
            onSubmit={(event) => event.preventDefault()}
          >
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

            <button type="submit" className="button primary-btn">
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default ContactPage
