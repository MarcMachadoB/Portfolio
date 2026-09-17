import { Button, Field, Input, Textarea } from '@fluentui/react-components'
import { useState } from 'react'
import PageHeading from '../components/PageHeading'

type FormState = {
  name: string
  email: string
  message: string
}

const initialForm: FormState = {
  name: '',
  email: '',
  message: '',
}

function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const apiBaseUrl =
    import.meta.env.VITE_API_URL?.replace(/\/$/, '') ?? 'https://tu-backend-url-aqui.com'
  const endpoint = `${apiBaseUrl}/api/contact`

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setSubmitMessage('')
    setSubmitStatus('idle')
    setIsSubmitting(true)

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        }),
      })

      const payload = await response.json().catch(() => null)

      if (!response.ok) {
        throw new Error(payload?.message ?? 'No se pudo enviar el mensaje. Inténtalo de nuevo.')
      }

      setSubmitStatus('success')
      setSubmitMessage('Mensaje enviado correctamente. Te responderé pronto.')
      setForm(initialForm)
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Ha ocurrido un error inesperado.'
      setSubmitStatus('error')
      setSubmitMessage(message)
    } finally {
      setIsSubmitting(false)
    }
  }

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

          <form className="surface col-lg-7 d-grid gap-3 p-4 rounded-4" onSubmit={handleSubmit}>
            <Field label="Nombre">
              <Input
                id="name"
                name="name"
                placeholder="Tu nombre"
                required
                value={form.name}
                onChange={(_, data) => handleChange('name', data.value)}
              />
            </Field>

            <Field label="Email">
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="yourname@example.com"
                required
                value={form.email}
                onChange={(_, data) => handleChange('email', data.value)}
              />
            </Field>

            <Field label="Mensaje">
              <Textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Cuéntame brevemente en qué puedo ayudarte..."
                required
                value={form.message}
                onChange={(_, data) => handleChange('message', data.value)}
              />
            </Field>

            {submitMessage ? (
              <div
                aria-live="polite"
                className={submitStatus === 'success' ? 'text-success' : 'text-danger'}
              >
                {submitMessage}
              </div>
            ) : null}

            <Button type="submit" appearance="primary" disabled={isSubmitting}>
              {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
            </Button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default ContactPage
