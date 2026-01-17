import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import AxiosClient from '@/provider/axios'
import {
  IAgenda,
  IAnnouncement,
  IImageSlider,
  INews,
  IProdiAbout,
  IServiceProdi,
} from '@/app/homepage/data/types'
import { AgendaProps, AnnouncementProps, NewsProps } from '@/app/information/news/data/types'
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
  const { page, limit, start_index, search, category, id_category, no_include_id } = props ?? {}

  const [news, setNews] = useState<INews[]>([])
  const [meta, setMeta] = useState<Meta>()

  const paramsSearch = new URLSearchParams()
  if (page) paramsSearch.append('page', page)
  if (limit) paramsSearch.append('limit', limit)
  if (start_index) paramsSearch.append('start-index', start_index)
  if (search) paramsSearch.append('search', search)
  if (category) paramsSearch.append('slug-kategori-berita', category)
  if (id_category) paramsSearch.append('id-kategori-berita', id_category)
  if (no_include_id) paramsSearch.append('no-include-id', no_include_id)

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

export const UseGetAnnouncement = (props?: AnnouncementProps) => {
  const { page, limit, search, id_category, year } = props ?? {}

  const [announcement, setAnnouncement] = useState<IAnnouncement[]>([])
  const [meta, setMeta] = useState<Meta>()

  const paramsSearch = new URLSearchParams()
  if (page) paramsSearch.append('page', page)
  if (limit) paramsSearch.append('limit', limit)
  if (search) paramsSearch.append('search', search)
  if (id_category) paramsSearch.append('id-kategori-pengumuman', id_category)
  if (year) paramsSearch.append('tahun', year)

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['announcement'],
    refetchOnWindowFocus: false,
    queryFn: () => AxiosClient.get('/public-prodi/pengumuman').then((res) => res?.data),
  })

  const loading = isLoading || isFetching

  useEffect(() => {
    if (data) {
      setAnnouncement(data?.data)
      setMeta(data?.meta)
    }
  }, [data])

  return { announcement, loading, meta }
}

export const UseGetAgenda = (props?: AgendaProps) => {
  const { page, limit, search, year } = props ?? {}

  const [agenda, setAgenda] = useState<IAgenda[]>([])

  const paramsSearch = new URLSearchParams()
  if (page) paramsSearch.append('page', page)
  if (limit) paramsSearch.append('limit', limit)
  if (search) paramsSearch.append('search', search)
  if (year) paramsSearch.append('tahun', year)

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['agenda', paramsSearch.toString()],
    refetchOnWindowFocus: false,
    queryFn: () =>
      AxiosClient.get(`/public-prodi/agenda?${paramsSearch}`).then((res) => res?.data?.data),
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

export const UseGetServiceProdi = () => {
  const [services, setServices] = useState<IServiceProdi[]>([])

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['services'],
    refetchOnWindowFocus: false,
    queryFn: () => AxiosClient.get('/public-prodi/prodi-layanan').then((res) => res?.data?.data),
  })

  const loading = isLoading || isFetching

  useEffect(() => {
    if (data) {
      setServices(data)
    }
  }, [data])

  return { services, loading }
}
