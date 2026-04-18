import { RiProfileFill } from 'react-icons/ri'

export interface IAboutProfile {
  id_satuan_organisasi: string
  id_unit: string
  isi_konten: string
  gambar: { url: string }[]
  created_at: string
  created_user: string
  updated_at: string
  updated_user: string
  nama_user_created: string
  nama_user_updated: string
}

export const Menus = [
  { id: 1, name: 'Tentang Prodi', link: '/profile', icon: <RiProfileFill /> },
  { id: 2, name: 'Unit Pengelola', link: '/profile/unit', icon: <RiProfileFill /> },
  { id: 3, name: 'Visi, Misi, dan Tujuan', link: '/profile/vision', icon: <RiProfileFill /> },
  {
    id: 4,
    name: 'Struktur Organisasi',
    link: '/profile/structure-organization',
    icon: <RiProfileFill />,
  },
  { id: 5, name: 'Staff', link: '/profile/staff', icon: <RiProfileFill /> },
  { id: 6, name: 'Dosen', link: '/profile/lecturer', icon: <RiProfileFill /> },
  { id: 7, name: 'Berita', link: '/profile/news', icon: <RiProfileFill /> },
  { id: 8, name: 'Galeri', link: '/profile/gallery', icon: <RiProfileFill /> },
  { id: 9, name: 'Hubungi Kami', link: '/profile/contact-us', icon: <RiProfileFill /> },
]
