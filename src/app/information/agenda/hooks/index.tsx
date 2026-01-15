import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import AxiosClient from '@/provider/axios'
import { IAgenda } from '@/app/homepage/data/types'

export const UseGetAgendaYear = () => {
  const [year, setYear] = useState<number[]>([])

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['agenda-year'],
    refetchOnWindowFocus: false,
    queryFn: () => AxiosClient.get('public-prodi/agenda-tahun').then((res) => res?.data?.data),
  })

  const loading = isLoading || isFetching

  useEffect(() => {
    if (data) {
      setYear(data)
    }
  }, [data])

  return { year, loading }
}

export const UseGetAgendaDetail = (slug: string) => {
  const [agendaDetail, setAgendaDetail] = useState<IAgenda>()
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['agenda-detail', slug],
    refetchOnWindowFocus: false,
    queryFn: () => AxiosClient.get(`/public-prodi/agenda/${slug}`).then((res) => res?.data?.data),
  })

  const loading = isLoading || isFetching

  useEffect(() => {
    if (data) {
      setAgendaDetail(data)
    }
  }, [data])

  return { agendaDetail, loading }
}
