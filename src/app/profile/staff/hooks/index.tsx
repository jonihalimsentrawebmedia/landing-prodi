import { useEffect, useState } from 'react'
import { IStaff } from '@/app/profile/staff/data/types'
import { Meta } from '@/contexts/types'
import { useQuery } from '@tanstack/react-query'
import AxiosClient from '@/provider/axios'

export const UseGetProfileStaff = () => {
  const [staff, setStaff] = useState<IStaff[]>([])
  const [meta, setMeta] = useState<Meta>()

  const { data, isFetching, isLoading } = useQuery({
    queryKey: ['staff'],
    refetchOnWindowFocus: false,
    queryFn: () => AxiosClient.get('/public-prodi/staff').then((res) => res?.data),
  })

  const loading = isLoading || isFetching

  useEffect(() => {
    if (data) {
      setStaff(data?.data)
      setMeta(data?.meta)
    }
  }, [data])

  return { staff, meta, loading }
}
