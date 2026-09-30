export type LeadPayload = {
  name: string
  phone: string
  email: string
  city: string
  projectType: string
  stage: string
  message: string
}

/*
 * INTEGRATION POINT — wire Formspree, Resend, or an API route here.
 * Nothing is sent today. Callers must not treat a resolved promise as delivery.
 */
export async function submitLead(_payload: LeadPayload): Promise<void> {
  return undefined
}
