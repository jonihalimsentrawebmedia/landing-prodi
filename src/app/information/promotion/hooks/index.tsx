import { useEffect, useState } from 'react'
import { IPromotion } from '@/app/information/data/types'
import { useQuery } from '@tanstack/react-query'
import AxiosClient from '@/provider/axios'

export const UseGetPromotionDetail = (slug: string) => {
  const [detailPromotion, setDetailPromotion] = useState<IPromotion>()

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['promotion-detail', slug],
    refetchOnWindowFocus: false,
    queryFn: () => AxiosClient.get(`/public-prodi/promosi/${slug}`).then((res) => res?.data?.data),
  })

  const loading = isLoading || isFetching

  useEffect(() => {
    if (data) {
      setDetailPromotion(data)
    }
  }, [data])

  return { detailPromotion, loading }
}

export const UseGetPromotionYear = () => {
  const [year, setYear] = useState<number[]>([])

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['promotion-year'],
    refetchOnWindowFocus: false,
    queryFn: () => AxiosClient.get('public-prodi/promosi-tahun').then((res) => res?.data?.data),
  })

  const loading = isLoading || isFetching

  useEffect(() => {
    if (data) {
      setYear(data)
    }
  }, [data])

  return { year, loading }
}
