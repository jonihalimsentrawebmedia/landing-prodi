export interface IPromotion {
  id_promosi: string
  id_satuan_organisasi: string
  gambar: string
  gambar_key: string
  keterangan_gambar: string
  judul: string
  slug: string
  isi_promosi: string // HTML string
  penulis: string
  baca: number
  publish: 'Y' | 'N'
  status: 'Y' | 'N'
  status_publish: 'PUBLISHED'
  diterbitkan_at: string | null
  published_at: string | null
  published_user: string | null
  promosi_gambar_tambahan: IMoreImage[]
  nama_satuan_organisasi: string
  nama_published: string | null
}

export interface IMoreImage {
  id_promosi_gambar_tambahan: number
  gambar: string
  gambar_key: string
  keterangan: string
  id_promosi: string
}
