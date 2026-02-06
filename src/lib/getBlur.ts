import { getPlaiceholder } from 'plaiceholder'

export async function GetBlurData(url: string) {
  try {
    const res = await fetch(url)
    const buffer = Buffer.from(await res.arrayBuffer())

    const { base64 } = await getPlaiceholder(buffer)
    return base64
  } catch {
    return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAB...' // fallback 1px
  }
}
