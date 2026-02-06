import { headers } from 'next/headers'

const API_URL = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL

export const FetchResAPI = async (endpoint: string) => {
  const headersList = await headers()
  const host = headersList.get('host')
  const origin =
    host === 'localhost:3000' || host === 'landing-prodi-v2.vercel.app'
      ? 'tradis-bi.stain-madina.ac.id'
      : host
  try {
    const promise = await fetch(`${API_URL}${endpoint}`, {
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json',
        'x-domain-origin': `${origin}`,
      },
      next: { revalidate: 30 },
    })

    if (promise.status === 200) {
      return await promise.json()
    }
  } catch (e) {
    if (e) {
      return {
        status: false,
      }
    }
  }
}
