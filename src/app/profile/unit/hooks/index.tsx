import { useEffect, useState } from 'react'
import { IUnitMember } from '@/app/profile/unit/data/types'
import { Meta } from '@/contexts/types'
import { useQuery } from '@tanstack/react-query'
import AxiosClient from '@/provider/axios'

export const UseGetProfileUnit = () => {
  const [unitProfile, setUnitProfile] = useState<IUnitMember[]>([])
  const [meta, setMeta] = useState<Meta>()

  const { data, isFetching, isLoading } = useQuery({
    queryKey: ['unit-profile'],
    refetchOnWindowFocus: false,
    queryFn: () => AxiosClient.get('/public-prodi/unit-pengelola').then((res) => res?.data),
  })

  const loading = isLoading || isFetching

  useEffect(() => {
    if (data) {
      setUnitProfile(data?.data)
      setMeta(data?.meta)
    }
  }, [data])

  return { unitProfile, meta, loading }
}
