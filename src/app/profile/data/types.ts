export interface IAboutProfile {
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


export const Menus = [
  { id: 1, name: 'Tentang', link: '/profile' },
  { id: 2, name: 'Unit Pengelola', link: '/profile/unit' },
  { id: 3, name: 'Visi, Misi, dan Tujuan', link: '/profile/vision' },
  { id: 4, name: 'Struktur Organisasi', link: '/profile/structure-organization' },
  { id: 5, name: 'Staff', link: '/profile/staff' },
  { id: 6, name: 'Dosen', link: '/profile/lecturer' },
  { id: 7, name: 'Berita', link: '/profile/news' },
  { id: 8, name: 'Galeri', link: '/profile/gallery' },
  { id: 9, name: 'Hubungi Kami', link: '/profile/contact-us' },
]