import { type FormEvent, type ReactNode, useState } from 'react'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { contact } from '@/content/home'
import { contactDetails, whatsappUrl } from '@/content/navigation'
import { submitLead } from '@/lib/submitLead'

function splitMarker(text: string, marker: string) {
  const index = text.indexOf(marker)
  if (index === -1) return text
  return (
    <>
      {text.slice(0, index)}
      <span className="ltr-isolate">{marker}</span>
      {text.slice(index + marker.length)}
    </>
  )
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width={20}
      height={20}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="motion-arrow-sm size-5 shrink-0"
    >
      <path d="M20 11.5A8.5 8.5 0 0 1 7.4 18.4L4 20l1.7-3.3A8.5 8.5 0 1 1 20 11.5Z" />
      <path d="M9.2 9.6c.2-.5.3-.5.6-.5h.5c.2 0 .3.1.4.3l.7 1.6c.1.2 0 .4-.1.5l-.4.4c-.1.1-.1.3 0 .4.3.5.8 1 1.3 1.3.1.1.3.1.4 0l.4-.4c.2-.2.4-.2.5-.1l1.6.7c.2.1.3.2.3.4v.5c0 .3 0 .4-.5.6A5.2 5.2 0 0 1 9.2 9.6Z" />
    </svg>
  )
}

function FieldLabel({
  htmlFor,
  children,
}: {
  htmlFor: string
  children: ReactNode
}) {
  return (
    <label htmlFor={htmlFor} className="text-caption text-ink-secondary">
      {children}
      <span aria-hidden="true" className="ms-1 text-ink-muted">
        {contact.requiredMark}
      </span>
    </label>
  )
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p id={id} className="mt-1 text-caption text-accent">
      {message}
    </p>
  )
}

function fieldErrorId(id: string) {
  return `${id}-error`
}

export function ContactSection() {
  const {
    eyebrow,
    headline,
    body,
    fields,
    projectTypes,
    stages,
    submitLabel,
    whatsappLabel,
    whatsappMessage,
    note,
    errors,
  } = contact
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [messageLength, setMessageLength] = useState(0)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const next: Record<string, string> = {}

    for (const element of form.elements) {
      if (
        !(
          element instanceof HTMLInputElement ||
          element instanceof HTMLSelectElement ||
          element instanceof HTMLTextAreaElement
        )
      ) {
        continue
      }
      if (!element.name || element.checkValidity()) continue
      next[element.name] =
        element.validity.typeMismatch && element.name === fields.email.name
          ? errors.email
          : errors.required
    }

    setFieldErrors(next)
    if (Object.keys(next).length > 0) return

    const data = new FormData(form)
    void submitLead({
      name: String(data.get(fields.name.name) ?? ''),
      phone: String(data.get(fields.phone.name) ?? ''),
      email: String(data.get(fields.email.name) ?? ''),
      city: String(data.get(fields.city.name) ?? ''),
      projectType: String(data.get(fields.projectType.name) ?? ''),
      stage: String(data.get(fields.stage.name) ?? ''),
      message: String(data.get(fields.message.name) ?? ''),
    })
  }

  return (
    <Section id="contact" space="md" tone="surface">
      <Container size="content">
        <div className="max-w-measure">
          <p className="text-eyebrow text-ink-muted">{eyebrow}</p>
          <h2 className="mt-3 text-display-md">{headline}</h2>
          <p className="mt-3 text-body-sm text-ink-secondary">{body}</p>
        </div>

        <form
          className="mt-7 flex flex-col gap-4"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <p className="min-w-0">
              <FieldLabel htmlFor={fields.name.id}>{fields.name.label}</FieldLabel>
              <input
                id={fields.name.id}
                name={fields.name.name}
                type="text"
                required
                autoComplete={fields.name.autoComplete}
                aria-invalid={fieldErrors[fields.name.name] ? true : undefined}
                aria-describedby={
                  fieldErrors[fields.name.name]
                    ? fieldErrorId(fields.name.id)
                    : undefined
                }
                className="field-line mt-1.5"
              />
              <FieldError
                id={fieldErrorId(fields.name.id)}
                message={fieldErrors[fields.name.name]}
              />
            </p>
            <p className="min-w-0">
              <FieldLabel htmlFor={fields.phone.id}>
                {fields.phone.label}
              </FieldLabel>
              <input
                id={fields.phone.id}
                name={fields.phone.name}
                type="tel"
                required
                autoComplete={fields.phone.autoComplete}
                aria-invalid={fieldErrors[fields.phone.name] ? true : undefined}
                aria-describedby={
                  fieldErrors[fields.phone.name]
                    ? fieldErrorId(fields.phone.id)
                    : undefined
                }
                className="field-line mt-1.5"
              />
              <FieldError
                id={fieldErrorId(fields.phone.id)}
                message={fieldErrors[fields.phone.name]}
              />
            </p>
            <p className="min-w-0">
              <FieldLabel htmlFor={fields.email.id}>
                {fields.email.label}
              </FieldLabel>
              <input
                id={fields.email.id}
                name={fields.email.name}
                type="email"
                required
                autoComplete={fields.email.autoComplete}
                aria-invalid={fieldErrors[fields.email.name] ? true : undefined}
                aria-describedby={
                  fieldErrors[fields.email.name]
                    ? fieldErrorId(fields.email.id)
                    : undefined
                }
                className="field-line mt-1.5"
              />
              <FieldError
                id={fieldErrorId(fields.email.id)}
                message={fieldErrors[fields.email.name]}
              />
            </p>
            <p className="min-w-0">
              <FieldLabel htmlFor={fields.city.id}>{fields.city.label}</FieldLabel>
              <input
                id={fields.city.id}
                name={fields.city.name}
                type="text"
                required
                autoComplete={fields.city.autoComplete}
                aria-invalid={fieldErrors[fields.city.name] ? true : undefined}
                aria-describedby={
                  fieldErrors[fields.city.name]
                    ? fieldErrorId(fields.city.id)
                    : undefined
                }
                className="field-line mt-1.5"
              />
              <FieldError
                id={fieldErrorId(fields.city.id)}
                message={fieldErrors[fields.city.name]}
              />
            </p>
          </div>

          <p className="min-w-0">
            <FieldLabel htmlFor={fields.projectType.id}>
              {fields.projectType.label}
            </FieldLabel>
            <select
              id={fields.projectType.id}
              name={fields.projectType.name}
              required
              defaultValue=""
              aria-invalid={
                fieldErrors[fields.projectType.name] ? true : undefined
              }
              aria-describedby={
                fieldErrors[fields.projectType.name]
                  ? fieldErrorId(fields.projectType.id)
                  : undefined
              }
              className="field-line mt-1.5"
            >
              <option value="" disabled>
                {fields.projectType.placeholder}
              </option>
              {projectTypes.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <FieldError
              id={fieldErrorId(fields.projectType.id)}
              message={fieldErrors[fields.projectType.name]}
            />
          </p>

          <p className="min-w-0">
            <FieldLabel htmlFor={fields.stage.id}>{fields.stage.label}</FieldLabel>
            <select
              id={fields.stage.id}
              name={fields.stage.name}
              required
              defaultValue=""
              aria-invalid={fieldErrors[fields.stage.name] ? true : undefined}
              aria-describedby={
                fieldErrors[fields.stage.name]
                  ? fieldErrorId(fields.stage.id)
                  : undefined
              }
              className="field-line mt-1.5"
            >
              <option value="" disabled>
                {fields.stage.placeholder}
              </option>
              {stages.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <FieldError
              id={fieldErrorId(fields.stage.id)}
              message={fieldErrors[fields.stage.name]}
            />
          </p>

          <p className="min-w-0">
            <FieldLabel htmlFor={fields.message.id}>
              {fields.message.label}
            </FieldLabel>
            <textarea
              id={fields.message.id}
              name={fields.message.name}
              required
              rows={5}
              maxLength={fields.message.maxLength}
              placeholder={fields.message.placeholder}
              aria-invalid={fieldErrors[fields.message.name] ? true : undefined}
              aria-describedby={
                fieldErrors[fields.message.name]
                  ? fieldErrorId(fields.message.id)
                  : undefined
              }
              onChange={(event) => setMessageLength(event.target.value.length)}
              className="field-line mt-1.5 min-h-36 resize-y"
            />
            <FieldError
              id={fieldErrorId(fields.message.id)}
              message={fieldErrors[fields.message.name]}
            />
            <span className="mt-1 block text-end text-caption text-ink-muted">
              <span className="ltr-isolate">
                {messageLength}/{fields.message.maxLength}
              </span>
            </span>
          </p>

          <div className="mt-2 flex flex-col gap-5">
            <Button type="submit" variant="solid" size="lg" className="w-full">
              {submitLabel}
              <span aria-hidden="true" className="motion-arrow ms-2">
                ←
              </span>
            </Button>

            <p className="flex items-center gap-4 text-caption text-ink-muted">
              <span aria-hidden="true" className="h-px flex-1 bg-border" />
              או
              <span aria-hidden="true" className="h-px flex-1 bg-border" />
            </p>

            <Button
              href={whatsappUrl(whatsappMessage)}
              variant="outline"
              size="md"
              className="w-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              {splitMarker(whatsappLabel, 'WhatsApp')}
            </Button>

            <p className="text-caption text-ink-muted">{note}</p>
          </div>
        </form>

        <ul className="mt-8 flex flex-col gap-2">
          <li>
            <a
              href={`tel:${contactDetails.phone.replace(/\s/g, '')}`}
              className="text-body-sm text-ink-secondary"
            >
              <span className="ltr-isolate">{contactDetails.phone}</span>
            </a>
          </li>
          <li>
            <a
              href={`mailto:${contactDetails.email}`}
              className="text-body-sm text-ink-secondary"
            >
              <span className="ltr-isolate">{contactDetails.email}</span>
            </a>
          </li>
        </ul>
      </Container>
    </Section>
  )
}
