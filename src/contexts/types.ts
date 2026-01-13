import { ReactNode } from 'react'

export interface InitialStateProps {
  listMenu: [] | null
  profile: IProfileResponse | null
}

export interface StateProps {
  children: ReactNode
}

export type ActionProps =
  | {
      type: 'SET_MENU'
      payload: []
    }
  | {
      type: 'SET_PROFILE'
      payload: IProfileResponse
    }

export interface IUnitOrganization {
  id_satuan_organisasi: string
  kelompok: string
  parent_id: string
  id_parent_satuan_organisasi: string
  logo: string
  favicon: string
  nama: string
  slug: string
  singkatan: string
  keyword: string
  is_alamat_sama_parent: boolean
  alamat: string
  provinsi: string
  kabupaten_kota: string
  kecamatan: string
  kelurahan: string
  kode_pos: string
  telepon: string
  fax: string
  email: string
  facebook: string
  twitter: string
  instagram: string
  youtube: string
  created_at: string
  created_user: string
  updated_at: string
  updated_user: string
  id_jenjang_pendidikan: string
  nama_jenjang_pendidikan: string
  kode_jenjang: string
  nama_parent: string
  nama_user_created: string
  nama_user_updated: string
  nama_parent_satuan_organisasi: string
  domain: string
  singkatan_universitas: string | null
  singkatan_fakultas: string | null
}

export interface IProfileResponse {
  SatuanOrganisasi: IUnitOrganization
  domain: string
}

export type Context =
  | 'PROFIL'
  | 'TENTANG'
  | 'AKREDITASI'
  | 'DOSEN'
  | 'KURIKULUM'
  | 'INFORMASI'
  | 'FASILITAS'
  | 'KONTAK'


export interface Meta {
  last_page: number
  total: number
}