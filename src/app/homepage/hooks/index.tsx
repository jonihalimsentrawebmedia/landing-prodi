import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import AxiosClient from '@/provider/axios'
import { IAgenda, IAnnouncement, IImageSlider, INews, IProdiAbout } from '@/app/homepage/data/types'

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

export const UseGetNews = () => {
  const [news, setNews] = useState<INews[]>([])

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['news'],
    refetchOnWindowFocus: false,
    queryFn: () => AxiosClient.get('/public-prodi/berita').then((res) => res?.data?.data),
  })

  const loading = isLoading || isFetching

  useEffect(() => {
    if (data) {
      setNews(data)
    }
  }, [data])

  return { news, loading }
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
