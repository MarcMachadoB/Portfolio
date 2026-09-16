import { Button, Field, Input, Textarea } from '@fluentui/react-components'
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

        <div className="contact-content row g-4 mt-4">
          <div className="contact-details col-lg-5 d-grid gap-2">
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

          <form
            className="surface col-lg-7 d-grid gap-3 p-4 rounded-4"
            onSubmit={(event) => event.preventDefault()}
          >
            <Field label="Nombre">
              <Input id="name" name="name" placeholder="Tu nombre" />
            </Field>

            <Field label="Email">
              <Input id="email" name="email" type="email" placeholder="tu@email.com" />
            </Field>

            <Field label="Mensaje">
              <Textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Cuéntame brevemente en qué puedo ayudarte..."
              />
            </Field>

            <Button type="submit" appearance="primary">
              Enviar mensaje
            </Button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default ContactPage
