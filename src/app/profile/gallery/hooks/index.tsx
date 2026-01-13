import { useEffect, useState } from 'react'
import { IAlbumGallery, IPhotoGallery, IVideoGallery } from '@/app/profile/gallery/data/types'
import { Meta } from '@/contexts/types'
import { useQuery } from '@tanstack/react-query'
import AxiosClient from '@/provider/axios'

export const UseGetGalleryAlbum = () => {
  const [galleryAlbum, setGalleryAlbum] = useState<IAlbumGallery[]>([])
  const [meta, setMeta] = useState<Meta>()

  const { data, isFetching, isLoading } = useQuery({
    queryKey: ['gallery-album'],
    refetchOnWindowFocus: false,
    queryFn: () => AxiosClient.get('/public-prodi/galeri-album').then((res) => res?.data),
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

export const UseGetGalleryVideo = () => {
  const [galleryVideo, setGalleryVideo] = useState<IVideoGallery[]>([])
  const [meta, setMeta] = useState<Meta>()

  const { data, isFetching, isLoading } = useQuery({
    queryKey: ['gallery-video'],
    refetchOnWindowFocus: false,
    queryFn: () => AxiosClient.get('/public-prodi/galeri-video').then((res) => res?.data),
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
