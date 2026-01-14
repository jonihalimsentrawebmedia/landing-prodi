export interface IFaq {
  id_faq: string
  id_kategori_faq: string
  id_satuan_organisasi: string
  pertanyaan: string
  jawaban: string // HTML string
  dokumens: string[]
  created_at: string
  created_user: string
  updated_at: string
  updated_user: string
  nama_kategori_faq: string
  nama_satuan_organisasi: string
  nama_user_created: string
  nama_user_updated: string
}

export interface IRegistration {
  id_jalur_pendaftaran: string
  id_satuan_organisasi: string
  nama_jalur_pendaftaran: string
  slug: string
  deskripsi: string // HTML string
  status: 'Y' | 'N'
  created_at: string
  created_user: string
  updated_at: string
  updated_user: string
  nama_user_created: string
  nama_user_updated: string
}
