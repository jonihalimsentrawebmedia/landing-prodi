export interface IImageSlider {
  gambar_key: string
  gambar_url: string
  is_atas: boolean
  is_bawah: boolean
}

export type PublishFlag = 'Y' | 'N'
export type StatusPublish = 'PUBLISHED'

export interface INewsMoreImage {
  gambar: string
  gambar_key: string
  keterangan_gambar?: string
}

export interface INews {
  id_berita: string
  id_satuan_organisasi: string

  gambar: string
  gambar_key: string
  keterangan_gambar: string

  judul: string
  slug: string
  id_kategori_berita: string
  nama_kategori_berita: string

  isi_berita: string
  penulis: string
  baca: number

  publish: PublishFlag
  status: PublishFlag
  status_publish: StatusPublish

  diajukan_at: string | null
  ditolak_at: string | null
  disetujui_at: string | null
  diterbitkan_at: string | null
  proses_at: string | null
  published_at: string | null
  unpublished_at: string | null

  diajukan_user: string | null
  ditolak_user: string | null
  disetujui_user: string | null
  proses_user: string | null
  published_user: string | null
  unpublished_user: string | null

  alasan_ditolak: string

  created_at: string
  created_user: string
  updated_at: string
  updated_user: string

  nama_user_created: string
  nama_user_updated: string
  nama_disetujui: string | null
  nama_published: string | null

  berita_gambar_tambahan: INewsMoreImage[]
}

export interface IAnnouncement {
  id_pengumuman: string
  id_satuan_organisasi: string
  judul_pengumuman: string
  slug: string
  isi_pengumuman: string
  penulis: string

  status: 'Y' | 'N'
  status_publish: 'PUBLISHED'
  proses_at: string | null
  published_at: string | null
  published_user: string | null
  nama_published: string | null

  dokumens: IAttachment[]
}

export interface IAttachment {
  id_pengumuman_dokumen: number
  url_dokumen: string
  dokumen_key: string
  id_pengumuman: string
}

export interface IAgenda {
  id_agenda: string
  id_satuan_organisasi: string

  gambar: string
  gambar_key: string
  keterangan_gambar: string

  judul: string
  slug: string

  waktu_mulai: string
  waktu_selesai: string
  lokasi_kegiatan: string

  isi_agenda: string
  penulis: string

  status: 'Y' | 'N'
  status_publish: 'PUBLISHED'
  diajukan_at: string | null
  ditolak_at: string | null
  alasan_ditolak: string
  disetujui_at: string | null
  diterbitkan_at: string | null
  proses_at: string | null

  published_at: string | null
  published_user: string | null
  nama_published: string | null
}

export interface IProdiAbout {
  id_satuan_organisasi: string
  id_unit: string
  isi_konten: string
  gambar: string[]
  created_at: string
  created_user: string
  updated_at: string
  updated_user: string
  nama_user_created: string
  nama_user_updated: string
}

export interface IServiceProdi {
  id_prodi_layanan: string
  nama_layanan: string
  slug: string
  tampil: 'Y' | 'N'
  url_layanan: string
}
