import { useEffect, useState } from 'react'
import { IPromotion } from '@/app/information/data/types'
import { Meta } from '@/contexts/types'
import { useQuery } from '@tanstack/react-query'
import AxiosClient from '@/provider/axios'

export const UseGetPromotion = () => {
  const [promotion, setPromotion] = useState<IPromotion[]>([])
  const [meta, setMeta] = useState<Meta>()

  const { data, isFetching, isLoading } = useQuery({
    queryKey: ['promotion'],
    refetchOnWindowFocus: false,
    queryFn: () => AxiosClient.get('/public-prodi/promosi').then((res) => res?.data),
  })

  useEffect(() => {
    if (data) {
      setPromotion(data?.data)
      setMeta(data?.meta)
    }
  }, [data])

  const loading = isLoading || isFetching

  return { promotion, meta, loading }
}
