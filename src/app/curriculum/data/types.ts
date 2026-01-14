import { JSX } from 'react'

export interface ICurriculum {
  id_kurikulum: string
  id_satuan_organisasi: string
  id_satuan_organisasi_universitas: string
  kode_jenjang_pendidikan: string
  lama_kuliah: number
  nama_jenjang_pendidikan: string
  nama_kurikulum: string
  nama_satuan_organisasi: string
  nama_satuan_organisasi_universitas: string
  slug: string
}

export interface IElement {
  id: string | number
  label: string
  value: string
  element: JSX.Element
}


export interface ISubjectCurriculum {
  id_kurikulum: string;
  id_mata_kuliah: string;
  id_satuan_organisasi: string;
  id_satuan_organisasi_universitas: string;
  jenis_mata_kuliah: "WAJIB" | "PILIHAN";
  nama_kurikulum: string;
  nama_mata_kuliah: string;
  nama_satuan_organisasi: string;
  nama_satuan_organisasi_universitas: string;
  semester: "GANJIL" | "GENAP";
  sks: number;
  slug: string;
  tahun: number;
}
