import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import AxiosClient from '@/provider/axios'
import { IAgenda, IAnnouncement, IImageSlider, INews, IProdiAbout } from '@/app/homepage/data/types'
import { NewsProps } from '@/app/information/news/data/types'
import { Meta } from '@/contexts/types'

export const UseGetSliderLanding = () => {
  const [sliderLanding, setSliderLanding] = useState<IImageSlider[]>([])

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['sliderLanding'],
    refetchOnWindowFocus: false,
    queryFn: () => AxiosClient.get('/public-prodi/landing-page').then((res) => res?.data?.data),
  })

  const loading = isLoading || isFetching

  useEffect(() => {
    if (data) {
      setSliderLanding(data)
    }
  }, [data])

  return { sliderLanding, loading }
}

export const UseGetNews = (props?: NewsProps) => {
  const { page, limit, start_index } = props ?? {}

  const [news, setNews] = useState<INews[]>([])
  const [meta, setMeta] = useState<Meta>()

  const paramsSearch = new URLSearchParams()
  if (page) paramsSearch.append('page', page)
  if (limit) paramsSearch.append('limit', limit)
  if (start_index) paramsSearch.append('start-index', start_index)

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['news', paramsSearch.toString()],
    refetchOnWindowFocus: false,
    queryFn: () => AxiosClient.get(`/public-prodi/berita?${paramsSearch}`).then((res) => res?.data),
  })

  const loading = isLoading || isFetching

  useEffect(() => {
    if (data) {
      setNews(data?.data)
      setMeta(data?.meta)
    }
  }, [data])

  return { news, loading, meta }
}

export const UseGetAnnouncement = () => {
  const [announcement, setAnnouncement] = useState<IAnnouncement[]>([])

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['announcement'],
    refetchOnWindowFocus: false,
    queryFn: () => AxiosClient.get('/public-prodi/pengumuman').then((res) => res?.data),
  })

  const loading = isLoading || isFetching

  useEffect(() => {
    if (data) {
      setAnnouncement(data?.data)
    }
  }, [data])

  return { announcement, loading }
}

export const UseGetAgenda = () => {
  const [agenda, setAgenda] = useState<IAgenda[]>([])

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['agenda'],
    refetchOnWindowFocus: false,
    queryFn: () => AxiosClient.get('/public-prodi/agenda').then((res) => res?.data?.data),
  })

  const loading = isLoading || isFetching

  useEffect(() => {
    if (data) {
      setAgenda(data)
    }
  }, [data])

  return { agenda, loading }
}

export const UseGetAboutProdi = () => {
  const [aboutProdi, setAboutProdi] = useState<IProdiAbout>()

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['aboutProdi'],
    refetchOnWindowFocus: false,
    queryFn: () => AxiosClient.get('/public-prodi/tentang').then((res) => res?.data?.data),
  })

  const loading = isLoading || isFetching

  useEffect(() => {
    if (data) {
      setAboutProdi(data)
    }
  }, [data])

  return { aboutProdi, loading }
}
