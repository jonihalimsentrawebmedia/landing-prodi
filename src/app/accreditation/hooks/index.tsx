import { useEffect, useState } from 'react'
import { IAccreditation } from '@/app/accreditation/data/types'
import { Meta } from '@/contexts/types'
import { useQuery } from '@tanstack/react-query'
import AxiosClient from '@/provider/axios'

export const UseGetAccreditation = () => {
  const [accreditation, setAccreditation] = useState<IAccreditation[]>([])
  const [meta, setMeta] = useState<Meta>()

  const { data, isFetching, isLoading } = useQuery({
    queryKey: ['accreditation'],
    refetchOnWindowFocus: false,
    queryFn: () => AxiosClient.get('/public-prodi/akreditas').then((res) => res?.data),
  })

  const loading = isLoading || isFetching

  useEffect(() => {
    if (data) {
      setAccreditation(data?.data)
      setMeta(data?.meta)
    }
  }, [data])

  return { accreditation, meta, loading }
}
