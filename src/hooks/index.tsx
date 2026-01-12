import { useEffect, useState } from 'react'
import { IProfileResponse } from '@/contexts/types'
import { useQuery } from '@tanstack/react-query'
import AxiosClient from '@/provider/axios'

export const UseGetProfile = () => {
  const [profile, setProfile] = useState<IProfileResponse>()

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['profile'],
    refetchOnWindowFocus: false,
    queryFn: () => AxiosClient.get('/public-prodi/profil').then((res) => res?.data?.data),
  })

  const loading = isLoading || isFetching

  useEffect(() => {
    if (data) {
      setProfile(data)
    }
  }, [data])

  return { profile, loading }
}
