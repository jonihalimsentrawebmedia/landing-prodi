export interface IAlbumGallery {
  id_galeri_album: string
  id_satuan_organisasi: string
  thumbnail: string
  thumbnail_key: string
  judul: string
  slug: string
  created_at: string
  created_user: string
  updated_at: string
  updated_user: string
  jumlah_foto: number
  nama_user_created: string
  nama_user_updated: string
}

export interface IPhotoGallery {
  id_galeri_foto: string
  id_satuan_organisasi: string
  id_album: string
  judul: string
  slug: string
  link_foto: string
  created_at: string
  created_user: string
  updated_at: string
  updated_user: string
  nama_user_created: string
  nama_user_updated: string
}

export interface IVideoGallery {
  id_galeri_video: string
  id_satuan_organisasi: string
  thumbnail: string
  thumbnail_key: string
  judul: string
  slug: string
  link_video: string
  created_at: string
  created_user: string
  updated_at: string
  updated_user: string
  nama_user_created: string
  nama_user_updated: string
}
