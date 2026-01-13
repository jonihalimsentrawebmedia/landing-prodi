import { useEffect, useState } from 'react'
import { Meta } from '@/contexts/types'
import { useQuery } from '@tanstack/react-query'
import AxiosClient from '@/provider/axios'
import { ILecturer } from '@/app/profile/lecturer/data/types'

export const UseGetProfileLecturer = () => {
  const [lecturer, setLecturer] = useState<ILecturer[]>([])
  const [meta, setMeta] = useState<Meta>()

  const { data, isFetching, isLoading } = useQuery({
    queryKey: ['staff'],
    refetchOnWindowFocus: false,
    queryFn: () => AxiosClient.get('/public-prodi/dosen').then((res) => res?.data),
  })

  const loading = isLoading || isFetching

  useEffect(() => {
    if (data) {
      setLecturer(data?.data)
      setMeta(data?.meta)
    }
  }, [data])

  return { lecturer, meta, loading }
}
