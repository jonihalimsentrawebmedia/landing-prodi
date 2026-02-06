import { useEffect, useState } from 'react'
import { IAlbumGallery, IPhotoGallery, IVideoGallery } from '@/app/profile/gallery/data/types'
import { Meta } from '@/contexts/types'
import { useQuery } from '@tanstack/react-query'
import AxiosClient from '@/provider/axios'

interface propsAlbum {
  search?: string
  page?: string
  limit?: string
}

export interface VideoProps {
  search?: string
  page?: string
  limit?: string
}

export const UseGetGalleryAlbum = (props?: propsAlbum) => {
  const { search, page, limit } = props ?? {}

  const [galleryAlbum, setGalleryAlbum] = useState<IAlbumGallery[]>([])
  const [meta, setMeta] = useState<Meta>()

  const ParamsSearch = new URLSearchParams()
  if (search) ParamsSearch.append('search', search)
  if (page) ParamsSearch.append('page', page)
  if (limit) ParamsSearch.append('limit', limit)

  const { data, isFetching, isLoading } = useQuery({
    queryKey: ['gallery-album', ParamsSearch.toString()],
    refetchOnWindowFocus: false,
    queryFn: () =>
      AxiosClient.get(`/public-prodi/galeri-album?${ParamsSearch}`).then((res) => res?.data),
  })

  const loading = isLoading || isFetching

  useEffect(() => {
    if (data) {
      setGalleryAlbum(data?.data)
      setMeta(data?.meta)
    }
  }, [data])

  return { galleryAlbum, meta, loading }
}

interface props {
  slug: string
}

export const UseGetGalleryPhoto = (props?: props) => {
  const { slug } = props ?? {}
  const [galleryPhoto, setGalleryPhoto] = useState<IPhotoGallery[]>([])
  const [meta, setMeta] = useState<Meta>()

  const ParamsSearch = new URLSearchParams()
  if (slug) ParamsSearch.append('slug_album', slug)

  const { data, isFetching, isLoading } = useQuery({
    queryKey: ['gallery-photo', ParamsSearch.toString()],
    refetchOnWindowFocus: false,
    queryFn: () =>
      AxiosClient.get(`/public-prodi/galeri-foto?${ParamsSearch}`).then((res) => res?.data),
  })

  const loading = isLoading || isFetching

  useEffect(() => {
    if (data) {
      setGalleryPhoto(data?.data)
      setMeta(data?.meta)
    }
  }, [data])

  return { galleryPhoto, meta, loading }
}

export const UseGetGalleryVideo = (props?: VideoProps) => {
  const { search, page, limit } = props ?? {}

  const [galleryVideo, setGalleryVideo] = useState<IVideoGallery[]>([])
  const [meta, setMeta] = useState<Meta>()

  const ParamsSearch = new URLSearchParams()
  if (search) ParamsSearch.append('search', search)
  if (page) ParamsSearch.append('page', page)
  if (limit) ParamsSearch.append('limit', limit)

  const { data, isFetching, isLoading } = useQuery({
    queryKey: ['gallery-video', ParamsSearch.toString()],
    refetchOnWindowFocus: false,
    queryFn: () =>
      AxiosClient.get(`/public-prodi/galeri-video?${ParamsSearch}`).then((res) => res?.data),
  })

  const loading = isLoading || isFetching

  useEffect(() => {
    if (data) {
      setGalleryVideo(data?.data)
      setMeta(data?.meta)
    }
  }, [data])

  return { galleryVideo, meta, loading }
}
