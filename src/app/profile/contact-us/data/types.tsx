export interface IContactUs {
  id_satuan_organisasi: string
  id_unit: string
  alamat: string
  email: string
  no_telepon: string
  iframe: string
  link_google_map: string
  created_at: string
  created_user: string
  updated_at: string
  updated_user: string
  nama_user_created: string
  nama_user_updated: string
}

export interface ILecturer {
  id_dosen: string
  id_sdm: string | null
  id_satuan_organisasi: string
  gambar_url: string
  nama: string
  nik: string
  tempat_lahir: string
  tanggal_lahir: string
  nip: string
  nidn: string
  jabatan_struktural: string | null
  golongan: string
  unit_kerja: string | null
  no_hp: string | null
  email: string | null
  id_status: string
  id_unit_kerja: string
  sumber_data: 'MANUAL' | 'API' | string
}
