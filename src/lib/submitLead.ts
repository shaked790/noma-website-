export type LeadPayload = {
  name: string
  phone: string
  email: string
  city: string
  projectType: string
  stage: string
  message: string
}

export type LeadSubmitResult =
  | { delivered: true }
  | { delivered: false; reason: 'not-configured' | 'failed' }

/*
 * INTEGRATION POINT — wire Formspree, Resend, or an API route here.
 * Nothing is sent today. A resolved promise is not delivery; callers must
 * branch on `delivered`.
 */
export async function submitLead(
  _payload: LeadPayload,
): Promise<LeadSubmitResult> {
  return { delivered: false, reason: 'not-configured' }
}
