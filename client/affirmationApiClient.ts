import request from 'superagent'

interface AffirmationType {
  affirmation: string
}

export async function getAffirmation(): Promise<AffirmationType> {
  const response = await request.get('/api/v1/affirmation')
  return response.body
}
