const API_URL = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL

export const FetchResAPI = async (endpoint: string) => {
  try {
    const promise = await fetch(`${API_URL}${endpoint}`, {
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json',
        'x-domain-origin': 'tradis-bi.stain-madina.ac.id',
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
