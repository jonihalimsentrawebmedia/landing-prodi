import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import AxiosClient from '@/provider/axios'
import { INews } from '@/app/homepage/data/types'

export interface NewsCategory {
  id_kategori: string
  nama_kategori: string
  slug: string
}

export const UseGetNewsCategory = () => {
  const [newsCategory, setNewsCategory] = useState<NewsCategory[]>([])

  const ParamsSearch = new URLSearchParams({ page: '1', limit: '9999' })
  ParamsSearch.append('is_have_berita', 'true')

  const { data, isFetching, isLoading } = useQuery({
    queryKey: ['news-category', ParamsSearch.toString()],
    refetchOnWindowFocus: false,
    queryFn: () =>
      AxiosClient.get(`/public-prodi/ref/kategori-berita?${ParamsSearch}`).then(
        (res) => res?.data?.data
      ),
  })

  const loading = isLoading || isFetching

  useEffect(() => {
    if (data) {
      setNewsCategory(data)
    }
  }, [data])

  return { newsCategory, loading }
}

export const UseGetNewsDetail = (slug: string) => {
  const [newsDetail, setNewsDetail] = useState<INews>()

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['news-detail', slug],
    refetchOnWindowFocus: false,
    queryFn: () => AxiosClient.get(`/public-prodi/berita/${slug}`).then((res) => res?.data?.data),
  })

  const loading = isLoading || isFetching

  useEffect(() => {
    if (data) {
      setNewsDetail(data)
    }
  }, [data])

  return { newsDetail, loading }
}
